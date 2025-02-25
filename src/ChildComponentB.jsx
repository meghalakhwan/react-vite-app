/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// // ! ============ Context API  [Consuming usng useContext() hook]  =============

// import { useContext } from "react";
// import { MyContext } from "./App";

// const ChildComponentB =() => {
//     let data = useContext(MyContext);
//     console.log(data);

//     return(
//         <>
//         <h2>I am ChildComponentB</h2>
//         <h2>Products</h2>
//             {data.map((val,ind) =>{
//                 console.log(val, ind);
//                 return(
//                     <div key={ind}>
//                       <p>  Title: {val.title}; </p>
//                         <p>Category: {val.category}; </p>
//                         <p>Ratings : {val.rating.rate};</p>
//                     </div>
//                 )
//             })}
            
        
//         </>
//     )
// }

// export default ChildComponentB;



// ! =================== HOC =======================
// import React from "react";
// import HOC from "./HOC";

// const ChildComponentB = props => {
//   console.log("ChildComponentB");
//   console.log(props);

//   return (
//     <>
//       <h2>I am ChildComponentB</h2>
//       <h3>Id : {props.id}</h3>
//       <h3>Name : {props.sname}</h3>
//       <h3>Age : {props.age}</h3>
//       <h3>Course : {props.course}</h3>
//     </>
//   );
// };

// export default HOC(ChildComponentB);


import HOC from './HOC.jsx';
import { useState } from 'react';

let ChildComponentB = (props) =>{

   return(
  <center>
  <h1>I am Child component B - {props.counter}</h1>

  <button onClick={props.handleIncrement}>Increment</button>
  <button onClick={props.handleReset}>reset</button>
  <button onClick={props.handleDecrement}>Decrement</button>

  </center>
   )
}

export default HOC(ChildComponentB);