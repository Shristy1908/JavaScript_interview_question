let str=" Hello World ";

  var str1=str.trim();

  var count = 0;
  
  for (var i = str1.length - 1; i >= 0; i--) {
    if (str1.charAt(i) == " ") {
      break;
    } else {
      count++;
    }
  }
  console.log(count);