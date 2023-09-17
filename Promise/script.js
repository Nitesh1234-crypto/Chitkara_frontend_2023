//create
function kalsepinaband(){
   return new Promise(function(resolve,reject){
    let accountBalance=12000;
    if(accountBalance<10000){
    resolve("bhai chod di");
    }else{
        reject("bahut paisa hai chodne ki jarurat nhi");
    }
   })
}
//consume
//1.then
let p=kalsepinaband();
// console.log(p);
/*p.then(
    function(data){
        console.log(data);
    },
    function(data){
        console.log(data);
    }
)
*/
/*kalsepinaband().then(
    function(data){
        console.log(data);
    },
    function(data){
        console.log(data);
    }
)*/
//2.then().catch();
kalsepinaband().then((data)=>{
    console.log(data);
}).catch(err=>console.log(err));


