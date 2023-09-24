function chopping(vegetable,quality){
    return new Promise((resolve,reject)=>{
        if(quality>60){
        setTimeout(()=>{
            let choppedvege="chopped"+vegetable
            resolve(choppedvege);
        },2000)
    }else{
        reject(vegetable+"kharab hai");
    }
    })
}
function cooking(choppedvege,length){
    return new Promise((resolve,reject)=>{
        if(length<4){
        setTimeout(()=>{
             resolve("khana tyAR HAI");
        },2000)
    }else{
        reject("khana nhi banega");
    }
    })

}
// chopping("potato",70).then((data)=>{
//     console.log("1st then")
//     console.log(data);
//     return cooking(data,6);
// }).then((data)=>{
//     console.log("2nd then");
//     console.log(data);
// }).catch((data)=>{
//     console.log(data);

// })
async function myTask(){
    try{
        let data =await chopping("potato",70);
        console.log(data);
        let data2=await cooking(data,8);
        console.log(data2);
    }catch(err){
        console.log(err);
    }
 
}
myTask();
// try{}catch(){}
