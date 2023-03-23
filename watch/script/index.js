let hour = document.getElementById('hours');
let minute = document.getElementById('minutes');
let second = document.getElementById('seconds');
let ap = document.getElementById('ampm');

let hh = document.getElementById('hh');
let mm = document.getElementById('mm');
let ss = document.getElementById('ss');
let hr_dot = document.querySelector(".hr_dot")
let min_dot = document.querySelector(".min_dot")
let sec_dot = document.querySelector(".sec_dot")

setInterval(()=>{
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let am = h >=12 ? "PM": "AM";
    
    // Convert 24 Hour into 12 jour 
    if(h > 12){
        h = h- 12
    }
    // Adding zero befor single digit
    h = (h<10) ? "0" + h : h;
    m = (m<10) ? "0" + m : m;
    s = (s<10) ? "0" + s : s;
    
    hour.innerHTML = h;
    minute.innerHTML = m;
    second.innerHTML = s;
    ap.innerHTML = am;

    // 12 clock 
    hh.style.strokeDashoffset = 440-(440 * h) /12;
    // 60 minutes 
    mm.style.strokeDashoffset = 440-(440 * m) /60;
    // 60 seconds 
    ss.style.strokeDashoffset = 440-(440 * s) /60;
    
    // 360 / 12 = 30
    hr_dot.style.transform = `rotate(${h * 30}deg)`
    // 360 / 60 = 6
    min_dot.style.transform = `rotate(${m * 6}deg)`
    // 360 / 60 = 6 
    sec_dot.style.transform = `rotate(${s * 6}deg)`
});

