import React from 'react'
 
function UserQualification(props) {
  return (
    <div>
        <h1>This is my props example and i am {props.name} </h1>
        <p>my age is {props.details.age}</p>
        <p>my email is {props.details.email}</p>
  
    </div>
  )
}

export default UserQualification