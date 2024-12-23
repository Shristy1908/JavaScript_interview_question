

//Higher Order Function: A function that accepts a function as an argument and/or returns a function as its value.

//A function that's passed as a argument to another function.

function HigherOrderFunction(a,b,callbackfunction){
    const result = a+b;
    callbackfunction(result);
}

HigherOrderFunction(2, 5, function callbackfunction(sum) {
  console.log(sum);
});