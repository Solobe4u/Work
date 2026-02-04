
// one rotation = 360 degrees
// one hour = 30 degrees (360/12)
// one minute = 6 degrees (360/60)
// one second = 6 degrees (360/60)

let hourHand = document.querySelector('.hour');
let minuteHand = document.querySelector('.minute');
let secondHand = document.querySelector('.second');

function updateClock(){
    let now = new Date();
    // console.log(now)
    let seconds = now.getSeconds();
    let minutes = now.getMinutes();
    let hours = now.getHours();
    hourHand.style.transform = `rotateZ(${hours * 30 + minutes/12}deg)`;// adding minutes/12 for smooth hour hand movement
    minuteHand.style.transform = `rotateZ(${minutes * 6}deg)`;// no need to add seconds/60 for smooth minute hand movement
    secondHand.style.transform = `rotateZ(${seconds * 6 }deg)`;// no need to add milliseconds/1000 for smooth second hand movement

    requestAnimationFrame(updateClock);// better than setInterval for animations

}

    updateClock();
    // setInterval(updateClock, 1000);