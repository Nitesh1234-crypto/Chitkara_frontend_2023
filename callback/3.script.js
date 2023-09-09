function download(URL){ //http://school.com/movie.mp4
    if(!URL.startsWith("http")){
        throw new Error ("Inavlid url");
    }
    console.log("....downloading start at:"+URL)
    setTimeout(()=>{
        let downloadedfile=URL.split("/").pop();
       console.log("downloaded file:"+downloadedfile)
    },3000)
}
download("http://school.com/movie.mp4")