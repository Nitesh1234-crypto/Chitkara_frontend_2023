 import React from "react";
 import ReactDOM from "react-dom";
// let heading=React.createElement("h1",{
//     id:"heading",
//     name:"Nitesh"
// },"Hello world");
// let heading2=React.createElement("h2",{
//     id:"heading2",
// },"Hello React");
//jsx
const hesding=(
    <h1 id="heading" className="container">Hello world</h1>
)


let root =ReactDOM.createRoot(document.querySelector("#root"));
root.render(hesding);