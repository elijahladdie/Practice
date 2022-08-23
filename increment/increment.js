const value_incre = document.getElementById("count-el");
let count = 0;
console.log(count);
const btn_press = document.getElementById("increment-btn")
 
btn_press.addEventListener("click", function(){
        count += 1;
        value_incre.innerText= count;
});
const save_press = document.getElementById("save-btn")
const pressed = document.getElementById("previous")


save_press.addEventListener("click", function(){ 
value_incre.innerText = 0
pressed.innerContent = "Previous entries" 
let countstr = count + "-"
pressed.textContent += countstr
count = 0
});

