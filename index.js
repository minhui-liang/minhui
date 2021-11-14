const text = document.querySelectorAll(".thePaths");
for(let i  = 0; i < text.length; i++){
    console.log(`text number ${i} length is ${text[i].getTotalLength()}`);
}

const lastWord = document.querySelector("#t8th");
const animation = document.querySelector("div.animation");
lastWord.addEventListener("animationend", () =>{
    animation.style = "transition: all 1.6s ease; opacity: 0; pointer-events:none";
})