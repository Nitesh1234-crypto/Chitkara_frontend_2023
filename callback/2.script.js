function starter(cb){
    console.log("starter aa chuka hai");
    setTimeout(()=>{
        console.log("khali pet aa the tut pade");
        cb(mainCourse)
    },2000)
}
function drinks(cb){
    console.log("drinks aa gayi");
    setTimeout(()=>{
  console.log("bottle khali");
  cb(billbharo);
    },1000)
}
function mainCourse(cb){
    console.log("asli chiz aa chuki hai");
    setTimeout(()=>{
   console.log("khana khtm bill le aau");
   cb();
    },5000)
}
function billbharo(){
    console.log("bill kaun bharega discussion suru");
    setTimeout(()=>{
    console.log("jisne sbse jada chakana khaya hai vo bill harega");
    },2000)
}
starter(drinks)