// declare and define function, input output machines
// we can pass in arguments or parameters
function test(mess){
    console.log(mess)
}
// run the function
test("Aaron");

// String ""
const x = "String";
// declaring a variable, defining a variable
test(x);

// Number/Integer
const y = 98;
test(y);

// Boolean true or false
const z = true;
test(z);

function add(p,o){
    console.log(p + o)
}
// need to convert the String to a Number
let a = Number(prompt("enter a number"));
let b = Number(prompt("enter another number"));
add(a, b);