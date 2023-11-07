import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
player.on('timeupdate', throttle(onPlay, 1000));

const LS_KEY = 'videoplayer-current-time';

const videoTiming = localStorage.getItem('LS_KEY') ?? 0;

player.setCurrentTime(videoTiming);

function onPlay({ seconds }) {
  localStorage.setItem('LS_KEY', seconds);
}
