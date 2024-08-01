let stopwatchInterval;
let elapsedTime = 0;
let lapCounter = 1;
function formatTime(time) {
    const hours = String(Math.floor(time / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((time % 3600) / 60)).padStart(2, '0');            
    const seconds = String(time % 60).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}
function updateStopwatch() {
    elapsedTime++;
    document.querySelector('.stopwatch .time').innerText = formatTime(elapsedTime);
}
function startStopwatch() {
    if (!stopwatchInterval) {
        stopwatchInterval = setInterval(updateStopwatch, 10);
    }           
}
function stopStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchInterval = null;
}
function resetStopwatch() {
    stopStopwatch();
    elapsedTime = 0;
    lapCounter = 1;
    document.querySelector('.stopwatch .time').innerText = '00:00:00';
    document.querySelector('.laps').innerHTML = '';
}
function lapStopwatch() {
    const lapTime = formatTime(elapsedTime);
    const lapElement = document.createElement('div');
    lapElement.innerText = `Lap ${lapCounter++}: ${lapTime}`;
    document.querySelector('.laps').appendChild(lapElement);
}