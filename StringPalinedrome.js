var str="SrsrS";
var str2="";
for(var i=str.length-1;i>=0;i--){
    str2=str2+str.charAt(i);
}
console.log(str2)
if(str==str2){
    console.log("Palinedrome No");
}
else{
    console.log("Not Palinedrome No");
}



// another approach


let str = "Noon";

str=str.toLowerCase();

let leftside=0;
let rightside=str.length-1;
let flag=1;

function checkPalindrome(){
    while(rightside>leftside){    // 3>0  2>1 1>2
    if(str[leftside]!==str[rightside]){   
        return flag=0;
    }
    leftside++;
    rightside--;
}
 return flag;
}

checkPalindrome(str);
if(flag==1){
   console.log("palindrome no")
}
else{
    console.log("not a palindrome no")
}
