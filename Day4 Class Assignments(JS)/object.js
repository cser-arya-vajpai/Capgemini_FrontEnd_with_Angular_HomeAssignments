//OBJECTS: An object is a dynamic data structure that stores related data as key-value pairs, where each key uniquely identifies its value.

let obj = {
    name : "Arya",
    age : 22,
    address : {
        city : "Jaipur",
        state : "Rajasthan"
    },
    printDetailsb: function () {
        console.log(`${this.name}`);
    }
}

console.log(obj);
console.log(obj.printDetailsb());

//asynchronous function 

//destructuring


//spread operator

//variable should be same as key


//named export
export function func() {
    console.log("hello world");
}

//export default func


//promises


//await keyword 

async function getData() {
    let data = await fetch('https://api.escuelajs.co/api/v1/products')
    let d = await data.json()
    console.log(d);
}
getData();
