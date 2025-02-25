/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { QspidersContext } from './QspidersComponent';
import StudentB1 from "./StudentB1";
import StudentB2 from "./StudentB2";


let StudentB = () => {
    let qspidersLink = useContext(QspidersContext);
  return (
  <>
  <h3> Student B</h3>
  <a href={qspidersLink} >Delhi Qspiders</a>
  <StudentB1></StudentB1>
  <StudentB2></StudentB2>
  </>
  )
}

export default StudentB;
