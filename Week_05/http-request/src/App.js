import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect } from "react";
import { useState } from "react";
import { BsFillArchiveFill,BsFillPenFill } from 'react-icons/bs';

function App() {
  const [user, setUser] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [about, setAbout] = useState("");


  useEffect(()=> {
    getPersonName()},[]);

  const getPersonName = async () =>{
    const response = await fetch('http://localhost:3001/personList');
    const data = await response.json();
    setUser(data)
  }
  
  const savePerson = async (pPerson) => {
    await fetch('http://localhost:3001/personList', {
        method: 'POST',
        body: JSON.stringify(pPerson),
        headers: { 'Content-Type': 'application/json' },
      });
      getPersonName() ;
  }
 
  const deletePerson = (id) => {
    fetch (`http://localhost:3001/personList/${id}`,{
      method:'DELETE'
    }).then((result)=>{
      result.json().then((resp)=>{
        getPersonName();
      })
    })
  }
 
  

  const editList = (id) => {
    let item = user[id-1];
    setFirstName(item.first_name)
    setLastName(item.last_name)
    setEmail(item.email)
    setPassword(item.password)
    setAbout(item.about)
 }


  const submit = (e) => {
    e.preventDefault();
    const newPerson ={
        first_name:firstName,
        last_name:lastName,
        email:email,
        password:password,
        about:about
    }
    savePerson(newPerson);
    getPersonName()
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row align-items-start">
          <div className="col-4">
            <div className="d-flex align-items-center p-3 my-3 text-white bg-primary rounded shadow-sm">
              <h1 className="h6 mb-0 text-white lh-1">ADD PERSON</h1>
            </div>
            <form onSubmit={submit}>
              <input
                className="form-control"
                placeholder="First Name"
                type="text"
                name="user[name]"
                value={firstName}
                onChange={(e)=>setFirstName(e.target.value)}
              />
              <br />
              <input
                className="form-control"
                placeholder="Last Name"
                type="text"
                name="user[email]"
                value={lastName}
                onChange={(e)=>setLastName(e.target.value)}
              />
              <br />
              <input
                className="form-control"
                placeholder="Email"
                type="email"
                name="Sign Up"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
              />
              <br />
              <input
                className="form-control"
                placeholder="Password"
                type="password"
                name="Sign Up"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
              />
              <br />
              <input
                className="form-control"
                placeholder="About"
                type="text-area"
                name="Sign Up"
                value={about}
                onChange={(e)=>setAbout(e.target.value)}
              />
              <br />
              <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <button className="btn btn-primary" type="submit">
                  ADD
                </button>
              </div>
            </form>
          </div>
          <div className="col-8">
            <div className="d-flex align-items-center p-3 my-3 text-white bg-primary rounded shadow-sm">
              <h1 className="h6 mb-0 text-white lh-1">PERSON LIST</h1>
     </div>
       <table className="table">
         <thead>
           <tr>
             <th scope="col">#</th>
             <th scope="col">FirstName</th>
             <th scope="col">LastName</th>
             <th scope="col">Email</th>
             <th scope="col">Password</th>
             <th scope="col">About</th>
           </tr>
         </thead>
         <tbody>
           {user.map((person)=>(
             <tr key={person.id}>
             <th scope="row">{person.id}</th>
             <td>{person.first_name}</td>
             <td>{person.last_name}</td>
             <td>{person.email}</td>
             <td>{person.password}</td>
             <td>{person.about}</td>
             <td><BsFillPenFill onClick={()=>editList(person.id)}/></td>
             <td><BsFillArchiveFill onClick={()=> deletePerson(person.id)}/></td>
             
           </tr>
           ))}
         </tbody>
       </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
