/* eslint-disable no-unused-vars */
import React, {useContext} from 'react'
import { QspidersContext } from './QspidersComponent'
let StudentB1 = () => {
     let qspidersLink = useContext(QspidersContext);
  return (
   <>
   <h3>Student B1</h3>
   <a href={qspidersLink} >Delhi Qspiders</a>
   </>
  )
}

export default StudentB1;
