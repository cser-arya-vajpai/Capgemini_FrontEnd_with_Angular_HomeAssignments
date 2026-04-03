//Array=> Push, pop, shift, unshift 
//POP METHOD: Used to remove the last element of an array.
let arr1 = [12,21,34,43];
arr1.pop();
console.log(arr1);

//PUSH METHOD: Used to insert an element to the last of an array
let arr2 = [78,67,29,92];
arr2.push(78);
console.log(arr2);

//SHIFT METHOD: Removes the first element of an array
let arr3 = [32, 89, 90, 89];
arr3.shift();
console.log(arr3);

//UNSHIFT METHOD: Adds element(s) to the beginning
let arr4 = [89,32,54,32];
arr4.unshift(89,34);
console.log(arr4);

//SPLICE METHOD : The splice() method in JavaScript is used to modify an array by adding, removing, or replacing elements.
//SYNTAX: array.splice(start, deleteCount, item1, item2, ...)
let a = [1,2,3,4,5];
a.splice(2,2,1);
console.log(a);

let b = [23,23,56,34];
b.splice(3,1);
console.log(b);    //POP using Splice

let c = [23,23,56,34];
c.splice(4,1,7);
console.log(c);   //PUSH using splice

//REVERSE METHOD: Reverses your array
let d = [12, 34, 56, 67, 89, 90];
d.reverse();
console.log(d);

//JOIN METHOD: 

//LOOPS: for of & for in
//FOR OF LOOP: used to iterate values 
//FOR IN LOOP: used to iterate keys/indices.
let e = [1, 356, 225, 567, 789];
for(let value of e) {
    console.log(value);     //return values 
}
for(let key in e) {
    console.log(key);      //return indices
}

let myArr = [23, 67, 89, 90, 78, 12];
//for each, map, filter, reduce

//for each is used to iterate just like a loop. 
myArr.forEach((num) => {
    console.log(num);
});


//MAP: is used to transform an array
let result = myArr.map((num => num*2));
console.log(result);

//FILTER: Used to select elements. Calls the callback fn and return the value based on condition. It needs a returned value.
let res = myArr.filter((num => num%2 ===0));
console.log(res);

//REDUCE: used to Reduce array to a single value. Callback fn can accept upto 3 values (Accumulator(stores result of previous step), elements(current), Index/Array(starting value of accumulator)).
let sum = myArr.reduce((acc, curr) => acc + curr, 0);
console.log(sum);