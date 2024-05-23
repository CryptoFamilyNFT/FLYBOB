/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useCallback, useState, useContext } from 'react';
import classes from './Scene.module.css';
import _cloneDeep from 'lodash/cloneDeep';
import go from "../../../assets/images/go.png";
import { Button, Modal } from '@mui/material';
import { Alert, AlertTitle } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {
  sounds,
  sceneImages,
  GAP_VALUE,
  GRAVITATION_VALUE,
  BIRD,
  PIPE_X_ENDPOINT,
  CANVAS,
  PIPE_X_UPPER_SCORE,
  SCORE_TEXT
} from './constants';
import { CoordinatesType } from './Scene.types';
import Api, { GameInfo } from '../../../api/api';
import { EtherContext, EtherContextRepository } from '../../../ethers/EtherContext';
import { IEtherContext } from '../../../ethers/IEtherContext';
import Connector from '../../../Connector';
import { ModeSwitcher } from '../../../ModeSwitcher';
import { Link, NavLink } from 'react-router-dom';

const BIRD_COPY: {
  rotation?: number; position: CoordinatesType
} = _cloneDeep(BIRD);

let backgroundImage: HTMLImageElement;
let birdImage: HTMLImageElement;
let groundImage: HTMLImageElement;
let topPipeImage: HTMLImageElement;
let bottomPipeImage: HTMLImageElement;
let flySound: HTMLAudioElement;
let scoreSound: HTMLAudioElement

interface Score {
  player: string;
  score: string;
}



/*
const addScores = () => {
  Api.addScore('Player1', '100')
    .then(() => {
      console.log('Score added');
    })
    .catch((error: any) => {
      console.error('Error adding score:', error);
    });
}
*/

const Scene = () => {
  const [gameOverModal, setGameOverModal] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [finalScore, setFinalScore] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasContext = useRef<CanvasRenderingContext2D>();
  const pipesCoordinate = useRef<CoordinatesType[]>([]);
  const { context, saveContext } = useContext(EtherContext) as EtherContextRepository;
  const [connectWallet, setConnectWallet] = useState(true)
  const [notBob, setCloseNotBOB] = useState(false)
  const [canvasInteractionEnabled, setCanvasInteractionEnabled] = useState(false);
  const [isPlayable, setIsPlayable] = useState(false);
  const score = useRef<number>(0);
  const requestID = useRef<number>(0);
  const isConnected = context.connected || false;
  const [lives_array, setLivesArray] = useState<number[]>([]);
  const [isDead, setDead] = useState<boolean>(false);
  const [data, setData] = useState<GameInfo>({
    userId: '',
    nftCount: 0,
    lives: 0,
    lastResetTime: 0,
  });
  const [playerAndScore, setPlayerAndScore] = useState<Score>({
    player: '',
    score: ''
  });
  const [forceUpdate, setForceUpdate] = useState(0);

  const updateScoreUI = (score: number) => {
    context.score = score
  }

  useEffect(() => {
    if (context.connected && context?.BobTokenIds && context?.BobTokenIds.length === 0) {
      setCanvasInteractionEnabled(false);
    } else {
      setCanvasInteractionEnabled(true);
    }
  }, [context?.BobTokenIds, context.connected]);

  const CheckScorePlayer = async (scoreToVerify: number, player: string) => {
    try {
      // Ottieni i punteggi precedenti del giocatore
      const prevScores = await Api.getScoreByUser(player);
      console.log("prev score", prevScores)
      const playerScore = prevScores[0]; // Prendi solo il primo punteggio (il più recente)
      if (prevScores && prevScores.length > 0) {

        console.log("scoreToVerify e playerScore.score", scoreToVerify , playerScore.score)
        if (scoreToVerify > playerScore.score) {
          // Se il nuovo punteggio è maggiore del punteggio precedente, aggiorna il punteggio
          updateScoreUI(scoreToVerify);
          await Api.updatePlayer(player, scoreToVerify.toString());
          console.log('Updated score:', scoreToVerify);
        }
      } else {
        // Se il giocatore non ha ancora un punteggio, aggiungi il nuovo punteggio
        await Api.addScore(player, scoreToVerify.toString());
        console.log('Added score:', scoreToVerify);
      }
    } catch (error) {
      console.error('Error checking/updating score:', error);
      // Tratta l'errore in base alle tue esigenze
    }
  };


  const CheckPlayerGameInfo = async (player: string) => {
    if (context.addressSigner && context.BobTokenIds) {
      try {
        // Verifica se il giocatore esiste nel database
        const existingPlayerData = await Api.getGameInfo(context.addressSigner);

        console.log(`Existing Player Data:${existingPlayerData[0]}`)
        if (!existingPlayerData) {
          // Se il giocatore non esiste, inizializzalo
          const gameInfoInit: GameInfo = {
            userId: context.addressSigner,
            nftCount: context.BobTokenIds?.length,
            lives: context.BobTokenIds?.length,
            lastResetTime: 0,
          };
          await Api.addGameInfo(context.addressSigner, '0', gameInfoInit);
          setLivesArray(Array.from({ length: gameInfoInit.lives }, (_, index) => index));
          setData(gameInfoInit);
        } else {
          setPlayerAndScore(existingPlayerData[0])
          setData(existingPlayerData[0]);
          setLivesArray(Array.from({ length: existingPlayerData[0].lives }, (_, index) => index));
        }
      } catch (error) {
        console.error('Error initializing player:', error);
      }
    }
  };

  useEffect(() => {
    CheckPlayerGameInfo(context.addressSigner ?? '')
  }, [context?.BobTokenIds, context.connected]);



  const loadSceneImages = async () => {
    backgroundImage = await sceneImages.get('background') as HTMLImageElement;
    birdImage = await sceneImages.get('bird') as HTMLImageElement;
    groundImage = await sceneImages.get('ground') as HTMLImageElement;
    topPipeImage = await sceneImages.get('topPipe') as HTMLImageElement;
    bottomPipeImage = await sceneImages.get('bottomPipe') as HTMLImageElement;
  };

  const loadSceneSounds = () => {
    flySound = sounds.get('fly') as HTMLAudioElement;
    scoreSound = sounds.get('score') as HTMLAudioElement;
  }

  const initCanvasContext = () => {
    if (canvasRef.current) {
      canvasContext.current = canvasRef.current.getContext('2d') as CanvasRenderingContext2D;
    }
  };

  const setStarterValues = useCallback(() => {
    BIRD_COPY.position = {
      ...BIRD.position
    };

    score.current = 0;

    pipesCoordinate.current = [
      {
        x: canvasRef.current?.width as number,
        y: 0,
      }
    ];
  }, []);


  const renderer = useCallback(() => {
    if (!canvasContext.current || !canvasRef.current || !isConnected || !isPlayable || data.lives <= 0) return;
    const nuovaLarghezza = backgroundImage.width + 50; // Mantieni la stessa larghezza
    const nuovaAltezza = backgroundImage.height * 2.5; // Aumenta l'altezza al doppio
    canvasContext.current.drawImage(
      backgroundImage,
      0,
      0,
      nuovaLarghezza,
      nuovaAltezza
    );
    for (let i = 0; i < pipesCoordinate.current.length; i++) {
      const constant = topPipeImage.height + GAP_VALUE;

      /* Draw top pipe */
      canvasContext.current.drawImage(
        topPipeImage,
        pipesCoordinate.current[i].x,
        pipesCoordinate.current[i].y
      );

      /* Draw bottom pipe */
      canvasContext.current.drawImage(
        bottomPipeImage,
        pipesCoordinate.current[i].x,
        pipesCoordinate.current[i].y + constant
      );

      /* Move pipes */
      pipesCoordinate.current[i].x--;

      /* Add new pipes */
      if (pipesCoordinate.current[i].x === PIPE_X_ENDPOINT) {
        pipesCoordinate.current = [
          ...pipesCoordinate.current,
          {
            x: canvasRef.current.width,
            y: Math.floor(Math.random() * topPipeImage.height) - topPipeImage.height,
          }
        ];
      }

      /* Bit about pipes */
      if (
        (
          BIRD_COPY.position.x + birdImage.width >= pipesCoordinate.current[i].x &&
          BIRD_COPY.position.x <= pipesCoordinate.current[i].x + topPipeImage.width &&
          (
            BIRD_COPY.position.y <= pipesCoordinate.current[i].y + topPipeImage.height ||
            BIRD_COPY.position.y + birdImage.height >= pipesCoordinate.current[i].y + constant
          )
        ) ||
        BIRD_COPY.position.y + birdImage.height >= canvasRef.current.height - groundImage.height
      ) {
        console.log('Game over');
        setGameOverModal(true);
        setFinalScore(score.current);
        return; // Termina la funzione qui
      }

      /* Change score */
      if (pipesCoordinate.current[i].x === PIPE_X_UPPER_SCORE) {
        score.current++;
        scoreSound.play();
      }
    }

    /* Draw ground */
    canvasContext.current.drawImage(
      groundImage,
      0,
      canvasRef.current.height - groundImage.height,
      groundImage.width + 50,
      groundImage.height,
    );

    /* Draw bird */
    canvasContext.current.save(); // Save the current canvas state
    canvasContext.current.translate(
      BIRD_COPY.position.x + birdImage.width / 2,
      BIRD_COPY.position.y + birdImage.height / 2
    );
    canvasContext.current.rotate((BIRD_COPY.rotation ?? 45 * Math.PI) / 180); // Convert degrees to radians
    canvasContext.current.drawImage(
      birdImage,
      -birdImage.width / 2,
      -birdImage.height / 2,
      birdImage.width,
      birdImage.height
    );
    canvasContext.current.restore();

    BIRD_COPY.rotation = -45; // Reset rotation to 0
    const BIRD_DEG = 45;

    BIRD_COPY.position.y += GRAVITATION_VALUE;
    BIRD_COPY.rotation += BIRD_DEG;

    /* Draw score */
    /* Draw score */
    const scoreText = SCORE_TEXT.text(score.current);
    const scoreTextWidth = canvasContext.current.measureText(scoreText).width;
    const scoreX = (canvasRef.current.width - scoreTextWidth) / 2;
    const scoreY = canvasRef.current.height - 450; // Center with marginTop of 50

    canvasContext.current.fillStyle = SCORE_TEXT.fill;
    canvasContext.current.font = SCORE_TEXT.font;
    canvasContext.current.fillText(scoreText, scoreX, scoreY);

    requestID.current = window.requestAnimationFrame(renderer);
    // eslint-disable-next-line no-sparse-arrays
  }, [setStarterValues, isConnected, isPlayable, data.lives, BIRD_COPY]);

  const removeEventListeners = useCallback(() => {
    window.removeEventListener('keydown', keyDownPressHandler);
    canvasRef.current?.removeEventListener('touchstart', keyDownPressHandler);
    window.cancelAnimationFrame(requestID.current);
  }, [requestID]);

  useEffect(() => {
    if (context.connected && context?.BobTokenIds && context?.BobTokenIds.length === 0) {
      setCloseNotBOB(true)
    }

  }, [context?.BobTokenIds, context.connected])


  useEffect(() => {
    if (data.lives === 0) {
      setDead(true)
    } else {
      setDead(false)
    }
  }, [data.lives])

  const keyDownPressHandler = () => {
    BIRD_COPY.position.y -= 35;
    BIRD_COPY.rotation = -60;
    flySound.play();
  };

  const handleCanvasInteraction = () => {
    if (!gameStarted) {
      setGameStarted(true);
      setIsPlayable(true);  // Enable gameplay when the user taps
    } else if (isPlayable) {
      keyDownPressHandler();
    }
  };

  const enableGame = () => {
    if (isConnected && context?.BobTokenIds && context?.BobTokenIds.length > 0) {
      setConnectWallet(true);
      setCanvasInteractionEnabled(true);
      setIsPlayable(true);
      setStarterValues();
      renderer();
    } else {
      setConnectWallet(isConnected);
      setIsPlayable(false);
      setCanvasInteractionEnabled(false);
    }
  };

  useEffect(() => {
    enableGame()
  }, [context?.BobTokenIds, context.connected]);

  const updateLivesArray = (num: number) => {
    const newArray = Array.from({ length: num }, (_, index) => index);
    setLivesArray(newArray);
  };

  const handleLoseLife = async () => {
    if (!context.addressSigner) return;
    if (data.lives <= 0) return;
    const updatedLives = data.lives - 1;

    const updatedGameInfo: Partial<GameInfo> = {
      lastResetTime: Math.floor(Date.now() / 1000) + 86400, //seconds (set to tomorrow)
      lives: updatedLives,
    };

    console.log('[I] ** Updated game info:', updatedGameInfo)

    try {
      await Api.updateGameInfo(context.addressSigner ?? '', updatedGameInfo);
      const existingPlayerData = await Api.getGameInfo(context.addressSigner);

      // Aggiornare lo stato locale con le nuove informazioni del gioco
      setData(existingPlayerData[0]);
    } catch (error) {
      console.error('Error updating game info:', error);
    }
  };

  const handleRestartGame = () => {

    CheckScorePlayer(finalScore, context.addressSigner ?? '')
      .then(() => {
        updateLivesArray(data.lives);
        handleLoseLife();
        CheckPlayerGameInfo(context.addressSigner ?? '');
        renderer()
        console.log("✅ data.lives: ", data.lives)
        if (data.lives > 0) {
          setIsPlayable(true);
          setGameOverModal(false);
          setFinalScore(score.current);
          setStarterValues();
        } else {
          setGameOverModal(false);
          setFinalScore(score.current);
          setDead(true);
        }

        setForceUpdate((prev) => prev + 1);
      })
      .catch((error) => {
        console.error('Error checking score:', error);
        // Handle the error
      });
  };

  useEffect(() => {
    initCanvasContext();
    setStarterValues();
    loadSceneSounds();
    (async () => {
      await loadSceneImages();
      renderer();
      window.addEventListener('keydown', keyDownPressHandler);
      canvasRef.current?.addEventListener('touchstart', handleCanvasInteraction);
    })();

    return () => {
      removeEventListeners();
      window.removeEventListener('keydown', keyDownPressHandler);
      canvasRef.current?.removeEventListener('touchstart', handleCanvasInteraction);
    };
  }, [forceUpdate, removeEventListeners, renderer, setStarterValues, canvasInteractionEnabled]);


  const closeModalConnected = () => {
    let connected: boolean = isConnected
    return connected
  }

  console.log("isConnected Modal: ", connectWallet)
  console.log("isPlayable: ", isPlayable)
  console.log("Data: ", data)
  return (
    <div style={{ height: '100%', marginTop: 100 }}>
      <div>
        <p style={{ color: 'yellow', font: '32px Josefin Sans, sans-serif' }}>My TOP Score: {context.score}</p>
      </div>
      <Modal
        open={!isConnected}
        className={classes.modal}
        onClose={closeModalConnected}
      >
        <div className={classes.paper}>
          <p style={{ color: 'yellow', font: '32px Josefin Sans, sans-serif' }}>Please Connect Your Wallet!</p>
          <div style={{ marginLeft: 'auto', display: 'flex', justifyContent: 'center', gap: 10, marginRight: 0 }}>
            <Connector>
              <ModeSwitcher mr={4} />
            </Connector>
          </div>
        </div>
      </Modal>

      <Modal
        open={notBob}
        className={classes.modal}
        style={{ zIndex: 9999 }}
      >
        <div className={classes.paper}>
          <p style={{ color: 'yellow', font: '32px Josefin Sans, sans-serif' }}>You don't have any BobHeadz :(</p>
          <div style={{ display: 'flex', flexDirection: 'row', gap: 20, justifyContent: 'center', alignItems: 'center' }}>
            <a href='https://app.ebisusbay.com/collection/bob-headz' target="_blank" rel="noopener noreferrer">
              <Button
                onClick={handleRestartGame}
                variant="contained"
                color="primary"
              >
                Buy One
              </Button>
            </a>
            <Button style={{ color: 'black', background: 'yellow', width: 50 }} variant='contained'>
              <NavLink to='/'>Home</NavLink>
            </Button>
          </div>
        </div>
      </Modal>

      {context.connected && (
        <Modal
          open={isDead}
          className={classes.modal}
          style={{ zIndex: 9999 }}
        >
          <div className={classes.paper}>
            <p style={{ color: 'yellow', font: '32px Josefin Sans, sans-serif' }}>You don't have lives :(</p>
            <div style={{ display: 'flex', flexDirection: 'row', gap: 20, justifyContent: 'center', alignItems: 'center' }}>
              <a href='https://app.ebisusbay.com/collection/bob-headz' target="_blank" rel="noopener noreferrer">
                <Button
                  onClick={handleRestartGame}
                  variant="contained"
                  color="primary"
                >
                  GET LIVES
                </Button>
              </a>
              <Button style={{ color: 'black', background: 'yellow', width: 50 }} variant='contained'>
                <NavLink to='/'>Home</NavLink>
              </Button>
            </div>
          </div>
        </Modal>
      )}

      <Modal
        open={gameOverModal}
        onClose={() => handleRestartGame()}
        className={classes.modal}
      >
        <div className={classes.paper}>
          <img src={go} alt="GameOver" className={classes.gameOverImage} />
          <p style={{ color: 'yellow', font: '32px Josefin Sans, sans-serif' }}>{finalScore}</p>
          {!isConnected && (
            <>
              <p style={{ color: 'yellow', font: '32px Josefin Sans, sans-serif' }}>Please Connect Your Wallet!</p>
              <div style={{ marginLeft: 'auto', display: 'flex', justifyContent: 'center', gap: 10, marginRight: 0 }}>
                <Connector>
                  <ModeSwitcher mr={4} />
                </Connector>
              </div>
            </>
          )}
          {isConnected && (
            <Button
              className={classes.gameOverButton}
              onClick={handleRestartGame}
              variant="contained"
              color="primary"
            >
              Restart Game
            </Button>
          )}
        </div>
      </Modal>

      <canvas
        className={classes.Scene}
        ref={canvasRef}
        width={CANVAS.width}
        height={CANVAS.height}
      />
    </div>
  );
};

export default Scene;
