/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { QspidersContext } from './QspidersComponent';
import StudentA1 from "./StudentA1";
import StudentA2 from "./StudentA2";


let StudentA = () => {
    let qspidersLink = useContext(QspidersContext);
  return (
  <>
  <h3  >Student A</h3>
  <a href={qspidersLink}>Delhi Qspiders</a>
  <StudentA1></StudentA1>
  <StudentA2></StudentA2>
  </>
  )
}

export default StudentA;
