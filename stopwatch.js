




watch();

function watch (){
let Time = new Date();
let  day = Time.getDay()
let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Sunday",]
let Dayname = days[day];
let  hour = Time.getHours()
let  minute = Time.getMinutes()
let  second = Time.getSeconds()
let  mill = Time.getMilliseconds()

let format = [Dayname,hour,minute,second].join(":");
setTimeout (watch,12)





WatchDisplay()
function WatchDisplay(){
    let Today = document.getElementById('watch-1')
    let hours = document.getElementById('watch-2')
    let minutes = document.getElementById('watch-3')
    let seconds = document.getElementById('watch-4')
    let millisecond  = document.getElementById('watch-5')
    
Today.textContent  = Dayname
hours.textContent  =  hour
minutes.textContent  = minute
seconds.textContent  = second
millisecond.textContent  = mill
}
document.body.style.animation = " animate 6.8s ease-in-out infinite"

}

