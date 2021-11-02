const hourHand = document.querySelector('.hour-hand');
const minHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');
const clockLetter = document.querySelector('.clock-letter');

 // 00:00:00 포맷 유지하도록
 function formatter(time){
    if (time < 10){
        time = "0" + time
    }
    return time;
}

function setDate(){
    const now = new Date();

    const hour = now.getHours();
    const min = now.getMinutes();
    const seconds = now.getSeconds();


    clockLetter.innerHTML = `${formatter(hour)}:${formatter(min)}:${formatter(seconds)}`;

    const hourDegrees = hour * (360 / 12) + 90;
    const minutesDegrees = min * (360 / 60) + 90;
    const secondsDegrees = seconds * (360 / 60) + 90 // 1초에 6도

    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    minHand.style.transform = `rotate(${minutesDegrees}deg)`;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
}



setInterval(setDate, 1000);
