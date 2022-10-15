import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { NavLink } from 'react-router-dom';
import app from '../firebase/firebase.init';

const auth = getAuth(app);

const Login = () => {
   const [success, setSuccess] = useState(false);
  const handleLogin = event => {
  event.preventDefault ();
  setSuccess(false);
  const form = event.target;
  const email = form.email.value;
  const password = form.password.value;

  signInWithEmailAndPassword(auth, email, password)
   .then ((result) => {
          const user = result.user;
          console.log(user);
          setSuccess(true);
          form.reset();
        })
        .catch((error) => {
          console.error("error:", error);
        });
  }

   const handleForgotPassword = () => {
     sendPasswordResetEmail(auth, )
   }

  return (
    <div className="w-25 mx-auto">
      <h2 className="text-success mt-5">Log in Now </h2>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name='email' placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" />
        </Form.Group>
          { success && <p>Log in Successfully</p>}
         <div className='d-flex'>
          <Button variant="primary" type="Register">
          Submit
        </Button>
        <br></br>
         <p className=' ms-2'><small> New to this website, please  <NavLink to="/register">Register</NavLink> </small></p>
      </div>
      </Form>
     <p> Forget Password? <button onClick={handleForgotPassword} type="button" className="btn btn-link"> Please Reset</button></p>
    </div>
  );
};

export default Login;