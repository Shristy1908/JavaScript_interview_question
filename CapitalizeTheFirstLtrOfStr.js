let str="i am shristy roy";

let strArr=str.split(" ") ;

const newarr=strArr.map((ele)=>{
    return ele[0].toUpperCase()+ele.slice(1);
})
const resStr=newarr.join(' ')
console.log(resStr);
