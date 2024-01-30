import {CoordinatesType} from './Scene.types';
import Background from "../../../assets/images/bg.png";
import Bird from "../../../assets/images/bird.png";
import Ground from "../../../assets/images/fg.png";
import TopPipe from "../../../assets/images/pipeNorth.png";
import BottomPipe from "../../../assets/images/pipeSouth.png";
import FlySound from "../../../assets/sounds/fly.mp3";
import ScoreSound from "../../../assets/sounds/score.mp3";
import {createAudio, createImage} from "../../../helpers";

export const GAP_VALUE = 130;
export const GRAVITATION_VALUE = 1.5;

export const CANVAS = {
  width: 288,
  height: 512
}

export const BIRD: { position: CoordinatesType } = {
  position:  {
    x: 10,
    y: 150
  }
};

export const PIPE_X_ENDPOINT = 125;
export const PIPE_X_UPPER_SCORE = 5;

export const sceneImages = new Map([
  [
    'background',
    createImage(Background)
  ],
  [
    'bird',
    createImage(Bird)
  ],
  [
    'ground',
    createImage(Ground)
  ],
  [
    'topPipe',
    createImage(TopPipe)
  ],
  [
    'bottomPipe',
    createImage(BottomPipe)
  ]
]);

export const sounds = new Map([
  [
    'fly',
    createAudio(FlySound)
  ],
  [
    'score', createAudio(ScoreSound)
  ]
]);

export const SCORE_TEXT = {
  fill: '#00FFFF',
  font: '32px Josefin Sans, sans-serif',
  text: (score: number) => `${score}`
}
