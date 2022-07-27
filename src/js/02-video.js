import Player from '@vimeo/player';
const throttle = require('lodash.throttle'); 

const iframe = document.querySelector('#vimeo-player');
const VIDEO_STORAGE_KEY = "videoplayer-current-time"
const throttleOptim = throttle(onPlay, 1000)

const player = new Player(iframe)

player.on('timeupdate', throttleOptim) 

function onPlay(data) {
    localStorage.setItem(VIDEO_STORAGE_KEY, data.seconds)
}

const currentTime = localStorage.getItem(VIDEO_STORAGE_KEY)

if (currentTime) {
    player.setCurrentTime(currentTime).then(function (seconds) {
        // seconds = the actual time that the player seeked to
    }).catch(function (error) {
        switch (error.name) {
            case 'RangeError':
                // the time was less than 0 or greater than the video’s duration
                break;

            default:
                // some other error occurred
                break;
        }
    });
}
