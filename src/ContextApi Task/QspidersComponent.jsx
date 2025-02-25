// eslint-disable-next-line no-unused-vars
import React from 'react'
import { createContext } from 'react'
import StudentA from "./StudentA";
import StudentB from "./StudentB";


export let QspidersContext = createContext();
let QspidersComponent = () => {
    let qspidersLink ="https://www.instagram.com/qspiders_delhi/";
  return (
   <>
   <h2>QspidersComponent</h2>
   <QspidersContext.Provider value={qspidersLink}>
    <br />
    <a href={qspidersLink}>Delhi Qspiders</a>

    <hr />
    <br />
    <StudentA></StudentA>
    <br />
    <hr />
    <br />
    <StudentB></StudentB>
    <br />
    <hr />
    <br />
   </QspidersContext.Provider>
   </>
  )
}

export default QspidersComponent;
