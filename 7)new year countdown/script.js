let dayEl = document.querySelector(".day h3")
let hourEl = document.querySelector(".hour h3")
let minuteEl = document.querySelector(".minute h3")
let secondEl = document.querySelector(".second h3")


// console.log(dayEl,hourEl,minuteEl,secondEl)
let newYearTime = new Date("jan 1 ,2026 00:00:00").getTime();



updateCountdown();

function updateCountdown(){
    let now = new Date().getTime();
let gap = newYearTime -  now ;

 let second = 1000;
 let minute = second * 60;
 let hour = minute * 60;
 let day = hour * 24;


const d = Math.floor(gap/day);
const h = Math.floor((gap % day)/ hour);
const m = Math.floor((gap % hour)/ minute);
const s = Math.floor((gap % minute)/ second);

dayEl.innerHTML = d;
hourEl.innerHTML =h
minuteEl.innerHTML = m;
secondEl.innerHTML = s;


setTimeout(()=>{
updateCountdown()
},1000)



}



