"use strict"

function showFirstMessage(text) {
    console.log(text);
    let num = 20;
}

showFirstMessage('Hello');

function calc (a,b) {
    return (a+b);
}

console.log(calc(4,3));

// function declaration
function ret() {
    let num = 50;
    return num;
}

console.log(ret());

// fucntion exprassion
const logger = function () {
    console.log('Hello')
};

logger();

// arrow fucntion
const culc = (a,b) => { return a+b};