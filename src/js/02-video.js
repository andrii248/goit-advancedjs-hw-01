import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
player.on('timeupdate', throttle(onPlay, 1000));

const LS_KEY = 'videoplayer-current-time';

const videoTiming = JSON.parse(localStorage.getItem('LS_KEY')) ?? {};
console.log(videoTiming);

player.setCurrentTime(videoTiming);

function onPlay({ seconds }) {
  localStorage.setItem('LS_KEY', JSON.stringify(seconds));
}
