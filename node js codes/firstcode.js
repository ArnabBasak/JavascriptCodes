var person = { // object creation in node JS is exact same in JS
    firstname: "Arnab",
    lastname: "Basak",
    age: 25
};
console.log(person) // printing objects in node js
console.log('hello world') // simple printing of hello world
function addNummber(a,b){ //function with return value
    return a + b;
}
function undefined()// any function without return statement will print undefined
{

}
console.log(addNummber(3,7));
console.log(undefined());

// In node JS createing a function without a name simply assigning a value to the function
var printsomething = function(){
    console.log("this is function without a name")
};
//printsomething();

setTimeout(printsomething,5000) // this will wait for 5 second and again print execute the function
