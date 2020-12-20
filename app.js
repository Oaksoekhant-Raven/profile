function addFunction() {
    var link = document.getElementById("menu-list");
    link.classList.toggle("show");
}

const text = document.querySelector('.title');
const strText = text.textContent;
const splitText = strText.split("");
text.textContent= "";
for(let i=0; i < splitText.length; i++) {
    text.innerHTML += "<span>"+ splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick,50);

function onTick() {
    const span = document.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++;
    if(char === splitText.length ) {
        complete();
        return;
    }
}
function complete() {
    clearInterval(timer);
    timer=null;
}