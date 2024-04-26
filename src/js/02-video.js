import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCAL_KEY = 'videoplayer-current-time';
const currentTime = localStorage.getItem(LOCAL_KEY);

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

player.on(
  'timeupdate',
  throttle(ev => localStorage.setItem(LOCAL_KEY, ev.seconds), 1000)
);

if (currentTime !== null) {
  player.setCurrentTime(currentTime);
}
console.log('l');
