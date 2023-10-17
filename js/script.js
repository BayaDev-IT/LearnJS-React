"use strict"

//ООП 
// ПРОТОТИПНОЕ
// let str = "some";
// let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

// console.dir([1,2,3]);

//==============
const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log('Hello');
    }
};

//3)
const john = Object.create(soldier);

// const john = {
//     health: 100
// }

// //1)
// john.__proto__ = soldier;

// console.log(john.armor);
john.sayHello();

//2)
// Object.setPrototypeOf(john, soldier);