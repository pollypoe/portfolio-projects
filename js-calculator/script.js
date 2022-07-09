//selectors
const input = document.querySelector(".input");
const result = document.querySelector(".output");
const keys = document.querySelectorAll("button");

//eventlistener
keys.forEach(key=>{
    key.addEventListener("click", calculate);
});

//calculate function
function calculate(){
    //clear output area
    let buttonText = this.innerText;
    if(buttonText === "C"){
        input.innerText = "";
        result.innerText = "0";
        result.style.animation = "";
        input.style.animation = "";
        return;
    }
    //backspace/delete output
    if(buttonText === "CE"){
        input.textContent = input.textContent.substring(0,input.textContent.length-1);
        return;
    }
    //dispay the result with eval function
    if(buttonText === "="){
        result.innerText = eval(input.innerText);
        result.style.animation = "big 0.5s ease-in-out";
        input.style.animation = "small 0.5s ease-in-out";
        result.style.animationFillMode = "forwards";
        input.style.animationFillMode = "forwards";
    }
    //display the user input
    else{
        input.textContent += buttonText;
        return;
    }
}
