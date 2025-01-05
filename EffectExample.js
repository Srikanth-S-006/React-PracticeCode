import React, { useState } from 'react'
import { useEffect } from 'react'

function EffectExample() {
  const [count,setcount]=useState(0);//[variable,function]
  const[calculation,setcalculation]=useState(0);
   
  useEffect(()=>{
    setcalculation(()=> count*2);
  },[count]);

  //use effect it takes parameters(function,dependencies)
  /*
   useEffect(()=>{
    setcalculation(()=> count*2);
  }
    return()=>cleartimeout(variable)
    
  ,[]);
   */


  return (
    <div>
      <h1>this is UseEffect example: </h1>
      <p>count:{count}</p>
      <button onClick={()=>setcount((c)=>c+1)}>clickme</button>
      <p>calculation:{calculation}</p>
    </div>
  )
}

export default EffectExample