//without using build-in methods

let str="Shristy";

let revseStr="";
for(var i=str.length-1;i>=0;i--){
    revseStr+=str[i];
}

console.log(revseStr);

// using built-in methods

let splitstr=str.split("").reverse().join("");
