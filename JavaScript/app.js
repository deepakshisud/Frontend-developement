console.log("Hello from our first js file");
let random = Math.random();
if(random < 0.5) {
    console.log("The number is less than 0.5");
    console.log(random);
}

//const password = prompt("please enter a new password");

function greet(firstName){
    console.log(`First name is ${firstName}`);
}

function repeat(str, n){
    result = '';
    for(let i = 0;i<n; i++){
        result+=str;
    }
    console.log(result);
}