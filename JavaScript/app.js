console.log("Hello from our first js file");
let random = Math.random();
if(random < 0.5) {
    console.log("The number is less than 0.5");
    console.log(random);
}

//const password = prompt("please enter a new password");



console.log("Loops");
for(let i=1;i<=10;i++){
    console.log(i);
}

const arr = ["dhg","yduygfuydg","ysdgyustguy","qewqeed","dyfyhsfhsgf"];
for(let i = 0; i<arr.length; i++){
    console.log(arr[i]);
}
console.log("While loop");
let count = 0;
while(count<10){
    console.log(`This is ${count}`);
    count++;
}

const sec = "Deepakshi";
const p = prompt("Enter the secret code");
while(p!==sec){
    p = prompt("Enter the secret code");
}
console.log("You got it!");