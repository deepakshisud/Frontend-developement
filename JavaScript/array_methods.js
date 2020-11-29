const num = [1,2,3,4,5];

num.forEach(function(l){
    console.log(l)
})


//maps

const dou =num.map(function(n){
    return n*2;
})

//arrow functions

const add = (x,y) => {
    return x+y;
}

//setTimeout

setTimeout(()=>{
    console.log("HELLO")
},3000)

//setInterval

const id = setInterval(()=>{
    console.log(Math.random())
},2000);


//reduce function

[1,2,3,45,4].reduce((accumulator,currentValue) => {
    return accumulator+currentValue
})