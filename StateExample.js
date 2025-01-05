import React from 'react'
import { useState } from 'react'

function StateExample(){
const [count,setcount]=useState(0);//[variable,function]
const addme=()=>{
  // setcount(2);
    setcount((myval)=>{
        return myval=myval+1;
    })
}
  return (

    <div>
         
        <p>now x incremented upon onClick :<h3>x : {count}</h3> </p>
        <button onClick={addme}>Click!</button>
        
    </div>
  )
}
export default StateExample