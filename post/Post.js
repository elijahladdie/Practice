let Apple = document.getElementById("apple")
let Orange = document.getElementById("orange")
let fruit =["🍊","🍏","🍊","🍏","🍊","🍏","🍊","🍏","🍊","🍏","🍊","🍏","🍊","🍏"]

    for (let i = 0 ; i < fruit.length ; i++){
        if (fruit[i] === "🍏"){
            Apple.innerText += "🍏";
            
        }else{
            Orange.textContent += "🍊";
        }

    }
alert("hello")

