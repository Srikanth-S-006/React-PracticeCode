import React from 'react'
import UserQualification from './UserQualification'


function User( ) {
 
const name="srikanth";
const details={
    age:21,
    email:"srikanth@gmail.com",

}
 
  return (
    <div>
         
        <UserQualification  name ={name}
        details={details}
         />
    </div>
  )
}

export default User