
let arr = [1, 2, 4, 5, 6];
var position = 3;
var ele = 3;


var i;

for (i = arr.length; i > position - 1; i--) {
  arr[i] = arr[i - 1];
}

arr[i] = ele;
console.log(arr);
