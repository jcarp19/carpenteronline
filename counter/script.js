"use strict";

let count = Number(document.getElementById("count").innerHTML);

const increaseCount = () => {
    count = ++count;
    document.getElementById("count").innerHTML = count;
}

const decreaseCount = () => {
    count =  --count;
    document.getElementById("count").innerHTML = count;
}