//object literals syntax

let obj = {
  name: "Shristy",
  age: 24,
};
console.log(obj);

//using object constructor

let obj1=new Object();
obj1.name="Ridhi";
obj1.age=25
console.log(obj1);

//using a constructor function

function fun(name,age){
    this.name=name;
    this.age=age;
}
const obj2=new fun("Jay",26);
console.log(obj2);

//using class syntax

class Person{
    constructor(name,age){
        this.name=name,
        this.age=age
    }
    greet(){
        console.log(`Hello ${this.name}`);
    }
}
const obj3=new Person("Shubham",26);
console.log(obj3.greet());
