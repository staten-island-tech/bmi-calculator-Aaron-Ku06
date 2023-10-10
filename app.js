function getBMI (a,b){
    console.log(a / ((b/100)**2));
    console.log(N);
    return (a / ((b/100)**2));
}
let a = Number(prompt("Enter Your Weight"));
let b = Number(prompt("Enter Your Height"));
let N = prompt("Enter your name");
WBMI = getBMI(a,b);
function check(){
    if (WBMI <= 18.5){
        console.log("Eat a couple hamburgers");
    } else if (WBMI > 18.5 && WBMI <= 24.5){
        copnsole.log("No need for hamburgers");
    } else if (WBMI > 24.5 && WBMI <= 29.5){
        console.log("Stop eating hamburgers");
    } else if (WBMI > 29.5 && WBMI <= 35){
        console.log("Eat a salad or become hamburger");
    } else if (WBMI > 35){
        console.log("You are literally the hamburger");
    } 
}
check(WBMI)



