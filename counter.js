

const increase = document.getElementById("increasebtn");
const decrease = document.getElementById("decreasebtn");
const reset = document.getElementById("resetbtn");
const counter = document.getElementById("counterlabel");
let count = 0;

increase.onclick = function(){
    count++;
    counter.textContent = count;
}

decrease.onclick = function(){
    count--;
    counter.textContent = count;
}

reset.onclick = function(){
    count = 0;
    counter.textContent = count;
}