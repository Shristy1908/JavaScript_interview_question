let num = 91;
let sum = 0;
var lastSingleValue=num;

while (lastSingleValue >= 10) {
    sum=0;
  while (num > 0) {
    let r = num % 10;
    sum = sum + r;
    num = Math.floor(num / 10);
  }
  lastSingleValue=sum;
  num=sum;
}
console.log(lastSingleValue);

