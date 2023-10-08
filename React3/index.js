 import React from "react";
 import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Main from "./component/Main";
import Footer from "./component/Footer";
 



//jsx --->html like structure
// let newHeading=
// (<h1 id="heading" className="heading">Hello world</h1>
// )


// //component --funcional component
// let Funcom=()=>(
//      <h1>Hello world using functional component</h1>
//     )

// let Htmlcode=()=>{
//     return(
//         <div>
//         {newHeading}
//         {/* <Funcom /> */}
//         {Funcom()}
//         <div className="container">
//             <h1>Hello React</h1>
//             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, quas?</p>
//             <div>
//                 <h2>sdhfsd</h2>
//                 <h1>dfhsdhfsd</h1>
//             </div>
//          </div>
//          </div>
// )
// };
let PageLayout=()=>{
    return(
        <div>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
        </div>
    )
}

let root =ReactDOM.createRoot(document.querySelector("#root"));
// root.render(<Funcom />);
root.render(<PageLayout/>);