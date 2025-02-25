/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/display-name */


// import React from "react";
// let HOC = ComponentName => {
//     return function Counter(props) {
       
//         console.log("I am from HOC");
//         console.log(props.id);
//         return (<ComponentName id={props.id} sname="Megha" age={22} course="React js" /> );       
//     };
// };


// export default HOC;


// ! ============== Task  on HOC =============

import React from 'react';
import { useState } from "react";

const HOC  = WrapperComponent => {
    return() => {
        let [counter, setCounter] = useState(0);

        let handleIncrement =()=> {
            setCounter(counter + 1);
        }
        let handleReset =()=> {
            setCounter(0);
        }
        let handleDecrement =()=> {
            setCounter(counter - 1);
        };

        return(
            <WrapperComponent 
            counter={counter}
            handleIncrement={handleIncrement}
            handleReset={handleReset}
            handleDecrement={handleDecrement}/>
        )
    };
};
export default HOC;