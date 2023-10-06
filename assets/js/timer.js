const timer = document.querySelector('.payment__timer');
let secondsLeft = 1200;
getCountdown(timer);
const everySecond = setInterval(function () {
    getCountdown(timer);
}, 1000);
function getCountdown(timerElement) {
    if (secondsLeft > 0) {
        minutes = String(Math.floor(secondsLeft / 60)).padStart(2, '0');
        seconds = String(Math.floor(secondsLeft % 60)).padStart(2, '0');
        timerElement.innerText = minutes + ':' + seconds;
        secondsLeft--;
    } else {
        timerElement.innerText = '00:00';
        clearInterval(everySecond);
    }
}