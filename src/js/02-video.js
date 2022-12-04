import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
// console.log(player);

const STORAGE_KEY = 'videoplayer-current-time';

localVimeo();

const onTime = function (e) {
// console.log(e);
let time = e.seconds;
// console.log(e.seconds);
localStorage.setItem(STORAGE_KEY, time);
};

player.on('timeupdate', onTime);

    function localVimeo() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);
    if (savedMessage) {
        console.log(savedMessage);
        player.setCurrentTime(Number(savedMessage));
        }
        player.setCurrentTime(0);
    };

