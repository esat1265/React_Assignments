import { React, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

function Login() {
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordRepeat, setPasswordRepeat] = useState();
  const [info, setInfo] = useState();

  const getUserName = (e) => {
    e.preventDefault();
    setUserName(e.target.value);
  };

  const getEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const getPassword = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const getPasswordRepeat = (e) => {
    e.preventDefault();
    setPasswordRepeat(e.target.value);
  };

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

        <Button onClick={handleSubmit} variant="primary" type="submit">
          SIGN UP
        </Button>
      </Form><br /><br />

      {info}
    </>
  );
}

export default Login;
