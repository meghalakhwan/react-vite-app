import React from 'react'

export const Candidate = (props) => {
    console.log(props)
    if(props.data.gender==="Male"){
        throw new Error(${props.data.name} you are not selcted)
    }
  return (
    <section  style={{
        border:"solid",height:"100px",width:"150px"    
    }} key={props.id}>
        <div>{props.data.name} you are selected</div>
        <div>{props.data.gender}</div>
    </section>
  )
}