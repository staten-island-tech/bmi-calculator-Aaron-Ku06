function BMI (){
    console.log(730*(a/b**2));
}
let a = Number(prompt("Enter Your Weight"));
let b = Number(prompt("Enter Your Height"));
BMI(730*(a/b**2));

function check(BMI){
    if (BMI <= 18.5){
        console.log("Eat a couple hamburgers")
    } else if (BMI > 18.5 && BMI <= 24.5){
        console.log("No need for hamburgers");
    } else if (BMI > 24.5 && BMI <= 29.5){
        console.log("Stop eating hamburgers");
    } else if (BMI > 29.5 && BMI <= 35){
        console.log("Eat a salad or become hamburger");
    } else if (BMI > 35){
        console.log("You are literally the hamburger");
    } 
    return(console.log);
};

