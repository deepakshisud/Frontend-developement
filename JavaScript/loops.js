// // console.log("Loops");
// // for(let i=1;i<=10;i++){
// //     console.log(i);
// // }

// // const arr = ["dhg","yduygfuydg","ysdgyustguy","qewqeed","dyfyhsfhsgf"];
// // for(let i = 0; i<arr.length; i++){
// //     console.log(arr[i]);
// // }
// // console.log("While loop");
// // let count = 0;
// // while(count<10){
// //     console.log(`This is ${count}`);
// //     count++;
// // }

// // const sec = "Deepakshi";
// // const p = prompt("Enter the secret code");
// // while(p!==sec){
// //     p = prompt("Enter the secret code");
// // }
// // console.log("You got it!");

// let input = prompt("Hey say something");
// while(true)
// {
//     input = prompt(input);
//     if(input === "stop copying me"){
//         break;
//     }
// }
// console.log("OK YOU WIN!!!")


// Guessing game

let max = parseInt(prompt("Enter the maximum number"));
while(!max){
    max = parseInt(prompt("Enter a valid number"));
}
const target = Math.floor(Math.random()*max)+1;

let guess = parseInt(prompt("Enter your first guess"));

let attempt = 1;

while(guess!== target){
    attempt++;
    if(guess>target){
        guess = parseInt(prompt("Too high! Enter a new guess"));
    }
    else {
        guess = parseInt(prompt("Too low! Enter a new guess"));
    }
}
console.log(`You GOT it!!! It took you ${attempt}`);