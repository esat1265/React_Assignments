import { React, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

function Login() {
// useStates for each input area
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordRepeat, setPasswordRepeat] = useState();
  const [info, setInfo] = useState();

  //getting username function
  const getUserName = (e) => {
    e.preventDefault();
    setUserName(e.target.value);
  };


  //getting email function
  const getEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  //getting passsword function
  const getPassword = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };


  //getting passrepeat function
  const getPasswordRepeat = (e) => {
    e.preventDefault();
    setPasswordRepeat(e.target.value);
  };



  //for rendering info section
  const getAlert = () => {
    return (
      <Alert variant="success">
        <h3>Your Information</h3>
        <p>Username : {userName}</p>
        <p>Email : {email}</p>
        <p>Password :{password} </p>
      </Alert>
    );
  };


  //sing up submit button and checking password correction 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === passwordRepeat) {
      setInfo(getAlert);
    } else {
      alert("Sifrenizi hatali girdiniz. Lutfen tekrar deneyiniz!");
    }
  };

  return (
    <>
      <Form>
        <h2>SIGN UP</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            onChange={getUserName}
            type="text"
            placeholder="user name"/><br /><br />
          <Form.Control onChange={getEmail} type="email" placeholder="email" /><br /> <br />
          <Form.Control
            onChange={getPassword}
            type="password"
            placeholder="Password"/><br /><br />
          <Form.Control
            onChange={getPasswordRepeat}
            type="password"
            placeholder="Password Repeat"/><br /><br />
        </Form.Group>

        <Button onClick={handleSubmit} className="primary" type="submit">
          SIGN UP
        </Button>
      </Form><br /><br />

      {info}
    </>
  );
}

export default Login;
