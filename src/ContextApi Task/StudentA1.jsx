/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import React, {useContext} from 'react'
import { QspidersContext } from './QspidersComponent'
let StudentA1 = () => {
     let qspidersLink = useContext(QspidersContext);
  return (
   <>
   <h3>Student A1</h3>
   <a href={qspidersLink}>Delhi Qspiders</a>
   </>
  )
}

export default StudentA1
