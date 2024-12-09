var words = "Shristy is frontend developer";

let splitStr = words.split(" ");
console.log(splitStr);
let result = "";

for (var i = 0; i < splitStr.length; i++) {
  result = result + splitStr[i].split("").reverse().join("") + " ";
}

console.log(result);
