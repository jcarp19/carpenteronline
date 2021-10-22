"use strict";

let bgColor = document.body.style;

const newColor = () => {
    let color1 = Math.floor(Math.random() * 255);
    let color2 = Math.floor(Math.random() * 255);
    let color3 = Math.floor(Math.random() * 255);
    
    bgColor.backgroundColor = `rgb(${color1}, ${color2}, ${color3})`;
}