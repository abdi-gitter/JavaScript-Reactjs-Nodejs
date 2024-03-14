let stopwatchStatus = "stopped";
let milliseconds = 0, seconds = 0, minutes = 0;
let interval;

function updateDisplay() {
    let millisecondsStr = milliseconds < 10 ? "0" + milliseconds : milliseconds.toString().slice(0, 2);
    let secondsStr = seconds < 10 ? "0" + seconds : seconds;
    let minutesStr = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("display").innerHTML = `${minutesStr}:${secondsStr}:${millisecondsStr}`;
}

function stopWatch() {
    milliseconds += 10;
    if (milliseconds >= 1000) {
        milliseconds = 0;
        seconds++;
        if (seconds >= 60) {
            seconds = 0;
            minutes++;
        }
    }
    updateDisplay();
}

function startStop() {
    if (stopwatchStatus === "stopped") {
        interval = window.setInterval(stopWatch, 10);
        document.getElementById("startStop").innerHTML = "Stop";
        stopwatchStatus = "started";
    } else {
        window.clearInterval(interval);
        document.getElementById("startStop").innerHTML = "Start";
        stopwatchStatus = "stopped";
    }
}

function reset() {
    window.clearInterval(interval);
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    updateDisplay();
    document.getElementById("startStop").innerHTML = "Start";
    stopwatchStatus = "stopped";
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("startStop").addEventListener("click", startStop);
    document.getElementById("reset").addEventListener("click", reset);
    updateDisplay();
});
