"use strict"

// let a = 5,
//     b = a;
// b = b+5;
// console.log(b)
// console.log(a)

// const obj = {
//     a: 5,
//     b: 1,
// };
// const copy = obj; //ссылку
// copy.a = 10;
// console.log(copy);
// console.log(obj);

// function copy(mainObj) {
//     let objCopy = {};

//     let key;
//     for(key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }

//     return objCopy;
// }

// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4,
//     }
// };

// const newNumbers = copy(numbers);
// newNumbers.a = 10;
// newNumbers.c.x = 10;
// console.log(newNumbers);
// console.log(numbers);

// const add = {
//     d: 17,
//     e: 20
// }

// console.log(Object.assign(numbers, add));
// const copyObj = Object.assign({}, add);
// copyObj.d = 25;
// console.log(copyObj);
// console.log(add);

// const oldArray = ['a','b','c'];
// const newArray = oldArray.slice();

// newArray[1] = 'z';
// console.log(oldArray);
// console.log(newArray);




// const arr = [1,12,3,14,5,6];
// arr.sort(compareNum);
// console.log(arr);

// function compareNum(a, b) {
//     return a-b;
// }
// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`)
// });

// arr.pop();
// arr.push(10);

// console.log(arr)

// for(let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for(let value of arr) {
//     console.log(value);
// }


// const str = prompt('','');
// const product = str.split(", ");
// product.sort();
// console.log(product.join('; '));



// spread============
const video = ['youtube', 'vimeo', 'rutube'],
    blogs = ['wordpress', 'livejournal', 'blogger'],
    internet = [...video, ...blogs, 'vk', 'facebook'];
console.log(internet);

function log(a,b,c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2,5,7];
log(...num)

// ==============
const arr = ['a', 'b'];
const arrNew = [...arr];
console.log(arrNew);


const q = {
    one: 1,
    two: 2
};
const newObJ = {...q}
console.log(newObJ);