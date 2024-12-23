var age=13;

const promise=new Promise(function(resolve,rejected){
    if(age>18){
        resolve("elegible for vote");
    }
    else{
        rejected("not elegible")
    }
})

promise.then(function(message){
    console.log(message);
}).catch(function(error){
    console.log(error)
}).finally(function(){
    console.log("finally called");
})