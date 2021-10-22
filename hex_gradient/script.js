"use strict";

// let bgGradient = document.body.style;

// const newGradient = () => {
//     let color1 = Math.floor(Math.random() * 256);
//     let color2 = Math.floor(Math.random() * 256);
//     let color3 = Math.floor(Math.random() * 256);
    
//     let gradient1 = `rgb(${color1}, ${color2}, ${color3})`;
//     let gradient2 = `rgb(${color3}, ${color2}, ${color1})`;
    
//     bgGradient.backgroundImage = `linear-gradient(to right, ${gradient1}, ${gradient2})`;

//     console.log(color1);
//     console.log(color2);
//     console.log(color3);
// }

let hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const getHexValue = () => {
    let randomHex = Math.floor(Math.random() * hexArray.length);
    return hexArray[randomHex];
}

const newGradient = () => {
    // create 12 hex values and push into a new array
    let hexValues = [];

    for (let i = 1; i <= 12; i++) {
        hexValues.push(getHexValue());
    }
   
    let gradient1 = `#${hexValues[0]}${hexValues[1]}${hexValues[2]}${hexValues[3]}${hexValues[4]}${hexValues[5]}`;
    let gradient2 = `#${hexValues[6]}${hexValues[7]}${hexValues[8]}${hexValues[9]}${hexValues[10]}${hexValues[11]}`;

    document.body.style.backgroundImage = `linear-gradient(to right, ${gradient1}, ${gradient2})`;
    
    console.log(hexValues);
    console.log(gradient1);
    console.log(gradient2);
}