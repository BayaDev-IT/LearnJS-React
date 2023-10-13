"use strict"

const num = 50;

// (num === 50) ? console.log('Ok') : console.log('False');

switch(num) {
    case 49: 
        console.log('False');
        break;
    case 50:
        console.log('True');
        break;
    case 100:
        console.log('False!');
        break;
    default: 
        console.log('It was very close');
        break;
}

