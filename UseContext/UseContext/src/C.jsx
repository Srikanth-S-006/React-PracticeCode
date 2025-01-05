import React from 'react'
import { useContext } from 'react'
import { data1,data2,data3,data4 } from './App.jsx'
import  './Div.css'
 
 
function C() {
const Name=useContext(data1);
 const Address=useContext(data2);
 const Age=useContext(data3);
 const Course=useContext(data4);
  return (
    <div class='div'>
       <h4>Recieved the values</h4>
      <h3>this is {Name} and i am from {Address} and i am {Age} years old and the course i choose is {Course}</h3>
    </div>
  )
}

export default C