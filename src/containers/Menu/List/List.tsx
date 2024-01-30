import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import classes from './List.module.css';
import { Button } from '@material-ui/core';
import { useMediaQuery, useTheme } from '@material-ui/core';
import { EtherContext, EtherContextRepository } from '../../../ethers/EtherContext';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Typography } from '@material-ui/core';
import Api, { GameInfo } from '../../../api/api';

const List = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const location = useLocation();
  const { context, saveContext } = useContext(EtherContext) as EtherContextRepository;
  const [alive, setAlive] = useState(false)
  const [lives_array, setLivesArray] = useState<number[]>([]);
  const [data, setData] = useState<GameInfo>({
    userId: '',
    nftCount: 0,
    lives: 0,
    lastResetTime: 0,
  });

  const CheckPlayerGameInfo = async (player: string) => {
    if (context.addressSigner && context.BobTokenIds) {
      try {
        // Verifica se il giocatore esiste nel database
        const existingPlayerData = await Api.getGameInfo(context.addressSigner);

        console.log(`Existing Player Data:${JSON.stringify(existingPlayerData)}`)
        if (!existingPlayerData) {
          // Se il giocatore non esiste, inizializzalo
          const gameInfoInit: GameInfo = {
            userId: context.addressSigner,
            nftCount: context.BobTokenIds?.length,
            lives: context.BobTokenIds?.length,
            lastResetTime: 0,
          };

          await Api.addGameInfo(context.addressSigner, '0', gameInfoInit);

          // Aggiorna lo stato con i dati appena inizializzati
          setData(gameInfoInit);
        } else {
          // Se il giocatore esiste, aggiorna lo stato con i dati esistenti
          setData(existingPlayerData[0]);
        }
      } catch (error) {
        console.error('Error initializing player:', error);
      }
    }
  };

  const ResetLives = async () => {
    const updatedGameInfo: GameInfo = {
      ...data,
      lives: context.BobTokenIds?.length ?? 0,
    };

    console.log('[i] *** Updated game info in List:', updatedGameInfo)

    try {
      await Api.updateGameInfo(context.addressSigner ?? '', updatedGameInfo);
      const existingPlayerData = await Api.getGameInfo(context.addressSigner ?? '');

      setData(existingPlayerData[0]);
    } catch (error) {
      console.error('Error updating game info in list:', error);
    }
  }

  //leave here atm

  function GetTimeCountdown() {
    const [remainingTime, setRemainingTime] = useState('');

    useEffect(() => {
      const intervalId = setInterval(() => {
        let today = Math.floor(new Date().getTime() / 1000);
        let lastTime = data.lastResetTime;  // Unix timestamp
        const remainTimeLast = lastTime - today;

        const diffInSeconds = Math.floor(remainTimeLast);
        const hours = Math.floor(diffInSeconds / 3600);
        const minutes = Math.floor((diffInSeconds % 3600) / 60);
        const seconds = diffInSeconds % 60;

        if (hours === 0 && minutes === 0 && seconds === 0) {
          setRemainingTime('0'); // Se il tempo è scaduto, setta a null
        } else {
          setRemainingTime(`${hours}h - ${minutes}m - ${seconds}s`);
        }
      }, 1000);

      return () => clearInterval(intervalId);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <div>{remainingTime !== '0'
      ?
      <Typography style={{ fontFamily: "Josefin Sans, sans-serif" }} variant="h6">{remainingTime}</Typography>
      :
      <Button onClick={() => ResetLives()} style={{ border: '2px solid yellow', color: 'yellow', background: 'rgba(0,0,0, 0.3)', width: '240px', minHeight: 50 }} variant='outlined'>
        RESET LIVES
      </Button>
    }</div>
  }

  const resetScore = async () => {
    await Api.resetScoreAll()
  }


  const dev1 = "0x8117529eC3Fc08D72fc933dE373C14D852a52B85"

  useEffect(() => {
    CheckPlayerGameInfo(context.addressSigner ?? '')
  }, [context?.BobTokenIds, context.connected]);

  useEffect(() => {
    if (data) {
      if (data.lives > 0) {
        setAlive(true);
      } else if (data.lives > 0) {
        setAlive(true);
      } else if (data.lives === 0) {
        setAlive(false);
      }
    }
  }, [data]);

  console.log('Data:', data, '... Alive:', alive, '... Data Lives:', data.lives);

  return (
    <>
      {isMobile && location.pathname === '/' ? (
        <div className={classes.List} style={{ marginTop: 0 }}>
          <Typography style={{ fontFamily: "Josefin Sans, sans-serif" }} variant="h4">Your Lives: {data && data.lives !== undefined ? data.lives : 'N/A'}</Typography>

          {context.connected && alive && (
            <Button style={{ color: 'black', background: 'yellow' }} variant='contained'>
              <NavLink to='/game'>Play</NavLink>
            </Button>
          )}
          {context.connected && context.addressSigner && context.addressSigner.toLowerCase() === dev1.toLowerCase() && (
            <Button onClick={() => resetScore()} style={{ color: 'yellow', border: '2px solid yellow', background: 'rgba(0,0,0, 0.3)' }} variant='outlined'>
              [ADM] - RESET
            </Button>
          )}
          {!context.connected && !alive && (
            <Button style={{ color: 'black', border: '2px solid yellow' }} disabled={true} variant='outlined'>
              <NavLink to='/game'>Play</NavLink>
            </Button>
          )}
          <Button style={{ color: 'black', background: 'yellow' }} variant='contained'>
            <NavLink to='/leaderboard'>Leaderboard</NavLink>
          </Button>
        </div>
      ) : (
        <div className={classes.List} style={{ marginTop: 200 }}>
          <Typography style={{ fontFamily: "Josefin Sans, sans-serif" }} variant="h4">Your Lives: {data && data.lives !== undefined ? data.lives : 'N/A'}</Typography>
          {context.connected && data && data.lives === 0 && data.lastResetTime > 0 && (
            <GetTimeCountdown />
          )}
          {data && context.connected && alive && (
            <Button style={{ color: 'black', background: 'yellow' }} variant='contained'>
              <NavLink to='/game'>Play</NavLink>
            </Button>
          )}
          {context.connected && context.addressSigner && context.addressSigner.toLowerCase() === dev1.toLowerCase() && (
            <Button onClick={() => resetScore()} style={{ color: 'yellow', border: '2px solid yellow', background: 'rgba(0,0,0, 0.3)' }} variant='outlined'>
              [ADM] - RESET
            </Button>
          )}
          {!context.connected && !alive && (
            <Button style={{ color: 'black', border: '2px solid yellow', background: 'rgba(0,0,0, 0.3)' }} disabled={true} variant='outlined'>
              <NavLink to='/game'>Play</NavLink>
            </Button>
          )}
          <Button style={{ color: 'black', background: 'yellow' }} variant='contained'>
            <NavLink to='/leaderboard'>Leaderboard</NavLink>
          </Button>
        </div>
      )}
    </>
  )
};

export default List;
