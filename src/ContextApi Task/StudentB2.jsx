/* eslint-disable no-unused-vars */
import React, {useContext} from 'react'
import { QspidersContext } from './QspidersComponent'
let StudentB2 = () => {
    let qspidersLink = useContext(QspidersContext);
  return (
   <>
   <h3>Student B2</h3>
   <a href={qspidersLink}>Delhi Qspiders</a>
   </>
  )
}

export default StudentB2;
