let url="https://jsonplaceholder.typicode.com/todos/1";
// fetch(url).then((data)=>{
//     console.log(data);
//     return data.json();
// }).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })


// aysnc /await

async function getData(){
    let data=await fetch(url);
   let resultdata= await data.json();
   console.log(resultdata);
}
getData();