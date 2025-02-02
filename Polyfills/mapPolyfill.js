Array.prototype.myMap=function(callback){
    let result=[];

    for(var i=0;i<this.length;i++){
        result.push(callback(this[i],i,this));
    }
    return result;
}

const arr=[2,5,1,6];

const multiplyByThree=arr.myMap((ele)=>ele*3);
console.log(multiplyByThree);