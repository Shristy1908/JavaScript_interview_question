const str="I am Shristy kumarira Roy";

const str1=str.split(" ");
let longestWord="";
let longestSize=0;
for(var i=0;i<str1.length;i++){
    if(str1[i].length > longestSize ){
        longestWord=str1[i];
        longestSize=str1[i].length;
    }
}

console.log(longestWord);