const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');

// hour.style.transform = 'rotate(90deg)';
// minute.style.transform = 'rotate(180deg)';
// sec.style.transform = 'rotate(270deg)';

setInterval(() => {
    const d = new Date();
    const hr = d.getHours();
    const min = d.getMinutes();
    const sec = d.getSeconds();

    const hr_rotation = 30*hr + 0.5*min;
    const min_rotation = 6*min;
    const sec_rotation = 6*sec;

    hour.style.transform = `rotate(${hr_rotation}deg)`
    minute.style.transform = `rotate(${min_rotation}deg)`
    second.style.transform = `rotate(${sec_rotation}deg)`
    

}, 1000)

