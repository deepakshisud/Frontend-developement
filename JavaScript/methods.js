const math = {
    pi: 3.14,
    square: function(num){
        return num*num;
    }
}


//this keyword

const cat = {
    name: "woa",
    color: "white",
    meow(){
        console.log("MEWO"); // cannot access name and color here
        console.log(this.name)
    }
}

//Try and Catch

try{
    hello.toUpperCase();
}

catch{
    console.log("Error");
}