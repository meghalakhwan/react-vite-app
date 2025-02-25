/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// import { MyContext } from "./App";

// const ChildComponentA = () => {
//     return(<>
//     <h2>I am ChildComponent A</h2>
//     <MyContext.Consumer>
//         {data => {
//             console.log(data);
//             return(
//                 <>
//             <h2>Products</h2>
//             {data.map((val,ind) =>{
//                 console.log(val, ind);
//                 return(
//                     <div key={ind}>
//                         <p> Title: {val.title}; </p>
//                         <p>Category: {val.category}; </p>
//                         <p>Ratings : {val.rating.rate};</p>
//                     </div>
//                 )
//             })}
            
//             </>
//             )
//         }
//         }
//     </MyContext.Consumer>
    
//     </>)
// }

// export default ChildComponentA;



// ! ============   HOC ================
// import React from "react";
// import HOC from "./HOC";

// const ChildComponentA = props => {
//     console.log("ChildComponent");
//     console.log(props);
//   return (
//    <>
//    <h2>I am child Component</h2>
//    <h3>Id: {props.id}</h3>
//    <h3>Name: {props.sname}</h3>
//    <h3>Age: {props.age}</h3>
//    <h3>Course: {props.course}</h3>

   
//    </>
//   )
// }

// export default HOC(ChildComponentA);



// ! === Task on HOC ============

import HOC from './HOC.jsx'
import { useState } from 'react';

let ChildComponentA = (props) =>{

    return (

        <center>
        <h1>I am Child component A -  {props.counter}</h1>

        <button onClick={props.handleIncrement}>Increment</button>
        <button onClick={props.handleReset}>reset</button>
        <button onClick={props.handleDecrement}>Decrement</button>

        </center>
    )
}

export default HOC(ChildComponentA);