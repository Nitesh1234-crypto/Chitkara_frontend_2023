function chopping(cb){
    console.log("sabzi katna suru");
    setTimeout(()=>{
        console.log("sabzi katchuki hai");
        cb(roti);
    },3000)
}
function cooking(cb){
    console.log("kahana banana suru");
    setTimeout(()=>{
      console.log("khana ban gaya");
      cb(serve)
    },5000)
}
function roti(cb){
    console.log("roti banana suru");
    setTimeout(()=>{
        console.log("roti ban chuki hai")
        cb();
    },2000)
}
function serve(){
    console.log("serve ho gya");
}
// chopping();
// cooking();
// roti();
// serve();
chopping(cooking);