console.log("Hello from our first js file");
let random = Math.random();
if(random < 0.5) {
    console.log("The number is less than 0.5");
    console.log(random);
}

const password = prompt("please enter a new password");

if(password.length>=6){
    console.log("LONG ENOUGH");
}
else{
    console.log("TOO SHORT");
}


console.log("Loops");
for(let i=1;i<=10;i++){
    console.log(i);
}