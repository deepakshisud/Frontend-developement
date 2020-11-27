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