'use strict';

var a = 5;
console.log(a);

var b = 3;

let incr = 10,
		decr = 10;

incr++;
decr--;

console.log("Инкремент: " + incr + "Декремент" + decr);

let isChecked = true,
		isClose = true;

console.log(isChecked || !isClose);