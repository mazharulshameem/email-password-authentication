import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, updateProfile,  } from 'firebase/auth';
import React, { useState } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { NavLink } from 'react-router-dom';
import app from '../firebase/firebase.init';


const auth = getAuth(app)

const RegisterReactBootstrap = () => {
  const [passwordError, setPasswordError] = useState('');
  const [success, setSuccess] = useState(false);
  const handleRegister = (event) => {
    setSuccess(false);
    event.preventDefault();
    const form =event.target;
    const name = form.name.value;
    const email =form.email.value;
    const password = form.password.value;
    console.log(name, email, password);
    if (!/(?=.*[A-Z].*[A-Z])/.test(password)){
        setPasswordError('Please, provide at least two Uppercase letters')
        return;
    }
    if(password.length < 6){
      setPasswordError('Please, provide at least 6 characters')
      return;
    }
     if (!/(?=.*[!@#$&*])/.test(password)) {
       setPasswordError("Please, add at least one special characters");
       return;
     }
     setPasswordError();

      createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
          const user = result.user;
          console.log(user);
          setSuccess(true);
          form.reset();
          verifyEmail();
          updateUserName(name)
        })
        .catch((error) => {
          console.error("error:", error);
          setPasswordError(error.message);
        });
    
  };
  const verifyEmail = () => {
   sendEmailVerification(auth.currentUser)
   .then(() => {
     alert('Please check your email address and verification your email.')
   });
  }
  const updateUserName = (name) => {
    updateProfile(auth.currentUser,{
      displayName:name

    })
    .then(() => {
      console.log('Updated profile Name')
    })
    .catch((error) =>{
      console.error("error:", error)
    })
  }


  return (
    <div className="w-25 mx-auto">
      <h2 className=" text-primary mt-5"> Register Now !!!</h2>
      <Form onSubmit={handleRegister}>

         <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Enter Full Name" required  />
        </Form.Group>
       
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" required />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" required />
        </Form.Group>
        <p className='text-danger'>{passwordError}</p>
        {success && <p className='text-success'> Registered Successfully</p>}
        
        <div className='d-flex'>
          <Button variant="primary" type="Register">
          Submit
        </Button>
        <br></br>
        <p className='ms-4 '><small> Already have an account, Please <NavLink to="/login">Log in</NavLink> </small></p>
        </div>
      </Form>
      
    </div>
  );
};

export default RegisterReactBootstrap;