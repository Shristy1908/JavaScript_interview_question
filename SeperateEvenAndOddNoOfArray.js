let arr = [6, 5, 1, 4, 9, 12, 23, 20];
let evenArr = [];
let oddArr = [];


// for (var i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 == 0) {
//     evenArr.push(arr[i]);
//   } else {
//     oddArr.push(arr[i]);
//   }
// }
// console.log([...evenArr, ...oddArr]);


// another way
evenArr=arr.filter((ele)=>ele%2==0);
oddArr = arr.filter((ele) => ele % 2 !== 0);

console.log([...evenArr,...oddArr])