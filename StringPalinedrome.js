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