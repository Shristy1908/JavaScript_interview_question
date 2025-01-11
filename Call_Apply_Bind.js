
let person1={
    firstName:"Shristy",
    lastName:"Kumari",
    age:24,
}

let person2 = {
  firstName: "Saloni",
  lastName: "Kumari",
  age: 23,
};

function fun(country){
    console.log(this.firstName+" "+country);
}
 
fun.call(person1,"India");
fun.apply(person2,["India"]);

const bindVar=fun.bind(person1,"India");
bindVar();