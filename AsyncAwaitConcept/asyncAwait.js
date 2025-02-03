function fetchData(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Data")
        },2000)
    })
}

const getData=async ()=>{
    const result=await fetchData();
    console.log("data fetched: "+result)
}

getData();
