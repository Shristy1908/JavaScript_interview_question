var arr = [12, 21, [1, 3], [2], [34, [13]]];

var resultarr = [];
for (var i = 0; i < arr.length; i++) {
  if (arr[i].length >= 1) {
    for (var j = 0; j < arr[i].length; j++) {
      resultarr.push(arr[i][j]);
    }
  } else {
    resultarr.push(arr[i]);
  }
}

resultarr.map((ele)=>{
    console.log(ele);
});
