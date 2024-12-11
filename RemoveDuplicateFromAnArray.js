// var arr=[2,3,2,1,3,4];
// const uniqueArray = [...new Set(arr)];
// console.log(uniqueArray);

const arr = [1, 1, 2, 3, 2, 4, 1, 5];
const uniqueArray = arr.filter(
  (element, index) => arr.indexOf(element) === index
);
console.log(uniqueArray); 
