const output = document.querySelector(".output");
const result = document.querySelector(".result");
const keys = document.querySelectorAll("button");

keys.forEach(key => {
    key.addEventListener("click", calculate)
});
function calculate() {
    let buttonText = this.innerText;
    if (buttonText == "AC") {
        output.value = "";
        output.placeholder = "Perfom arthmetic operations";
        result.innerText = "";
        return;
    }
    if (buttonText == "DEL") {
        output.value = output.value.substr(0, output.value.length - 1);
        output.placeholder = output.placeholder.substr(0, output.placeholder.length - 1);
        return;
    }
    if (buttonText == "=") {
        result.innerText = eval(output.value);
        output.placeholder = "The last Input was "+ output.value ;
        output.value = null;
        result.style.animation = "big .5s ease-in-out";
        output.style.animation = "small .5s ease-in-out";
        output.style.animationFillMode = "forwards";
        result.style.animationFillMode = "forwards";

    }  else {
        output.value += buttonText;
    }
}