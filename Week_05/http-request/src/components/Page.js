import React from 'react'


function Page(props) {
    
   
  return (
    <div className="container-fluid">
        <div className="row align-items-start">
          <div className="col">
            <div className="d-flex align-items-center p-3 my-3 text-white bg-primary rounded shadow-sm">
              <h1 className="h6 mb-0 text-white lh-1">PERSON DETAIL</h1>
            </div>
            <p>First Name : {props.person.firstName}</p>
            <p>Last Name : {props.person.lastName}</p>
            <p>Email : {props.person.email}</p>
            <p>Password : {props.person.password}</p>
            <p>About : {props.person.about}</p>
          </div>
        </div>

    </div>
    
  )
}

export default Page