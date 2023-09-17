function download(URL,cb){ // http://chitkara.com/movie.mp4
    if(!URL.startsWith("http")){
        throw new Error ("Invalid URL");
    }
    setTimeout(()=>{
        let downloadedfile=URL.split("/").pop();
        console.log(downloadedfile);
        cb(downloadedfile)
    },3000)
}
function compress(file,cb){ //movie.mp4--->movie.zip
    setTimeout(()=>{
        let compressFile=file.split(".")[0]+".zip";
        console.log(compressFile);
        cb(compressFile);

    },1000)

}
function upload(file,cb){
    let newURL="http://chitkara.com/"+file;
    setTimeout(()=>{
        console.log("successfully uploaded at:"+newURL);
        cb("done");
    },2000)

}

download("http://chitkara.com/notice.pdf",function(dfile){
    compress(dfile,function(cfile){
        upload(cfile,function(msg){
            console.log(msg);
        });
    })
})



// upload("movie.zip",function(){});

// compress("movie.mp4",function(){});

// download("http://chitkara.com/movie.mp4",function(){});
