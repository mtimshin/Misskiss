let video;
let playButton;
let pauseButton;
let stopButton;

video = document.querySelector('#video-player');
playButton = document.querySelector('#play');
pauseButton = document.querySelector('#pause');
stopButton = document.querySelector('#stop');

playButton.onclick = function() {
    play();
    pauseButton.style.display = 'inline-block';
    stopButton.style.display = 'inline-block';
    pauseButton.onclick = pause;
    stopButton.onclick = stop;
};

function play() {
    video.play();
}

function pause() {
    video.pause();
}

function stop() {
    video.pause();
    video.currentTime = 0;
}
