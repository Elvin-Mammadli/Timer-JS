const min = document.querySelector('.min');
const sec = document.querySelector('.sec');
const millisec = document.querySelector('.millisec');
const reset = document.querySelector('.reset');
const start = document.querySelector('.start');


function startCountDown() {
    let tempMilliSec = +millisec.value;
    let milliSecInterval = setInterval(() => {
        if (tempMilliSec > 0) {
            tempMilliSec -= 1;
            millisec.value = tempMilliSec;
        }
        else {
            tempMilliSec = 9;
            millisec.value = tempMilliSec;
        }
    }, 100);

    let totalSeconds = (+min.value * 60 + +sec.value);
    let totalSecInterval = setInterval(() => {
        if (totalSeconds > 0) {
            totalSeconds -= 1
            let seconds = totalSeconds - parseInt(totalSeconds / 60) * 60;
            if (seconds < 10) {
                sec.value = `0${seconds}`
            }
            else sec.value = seconds;

            let minutes = parseInt(totalSeconds / 60)
            if (minutes < 10) {
                min.value = `0${minutes}`
            }
            else min.value = minutes;
        }
        else {
            clearInterval(totalSecInterval);
            clearInterval(milliSecInterval);
            millisec.value = '9';
            sec.value = '00';
            min.value = '00';
        }
    }, 1000);
}


function resetCountDown() {
    document.location.reload()
}

start.addEventListener('click', startCountDown);
reset.addEventListener('click', resetCountDown);