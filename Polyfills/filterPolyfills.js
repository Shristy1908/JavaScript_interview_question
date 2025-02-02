
Array.prototype.myfilter=function(callback){
    let temp=[];
    for(let i=0;i<this.length;i++){
       if(callback(this[i],i,this))  temp.push(this[i]);
    }
    return temp;
}

const arr=[1,5,3,2,7,8];

let result=arr.myfilter((ele)=>(ele>3))
console.log(result);