import { useState } from 'react';
import React  from 'react';
import '../styles/LogIn.css';
import {Container , Button, Form} from 'react-bootstrap';
import {Link, useNavigate} from 'react-router-dom'; 

const LogIn = () => {

    const[formData,setFormData]=useState({
        
        email:"",
        password:""
      })
    
      const handleChange = (e) => {
        const{name,value}=e.target;
        setFormData({...formData,[name]:value});
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
      };
  return (
    <Container>
   <h1>Login Form</h1>
   <Form onSubmit={handleSubmit}>
   
   
   <Form.Group>
   <Form.Label>Email</Form.Label>
   <Form.Control type='email' value={formData.email} onChange={handleChange} name='email' required></Form.Control>
   </Form.Group>
   
   <Form.Group>
   <Form.Label>Password</Form.Label>
   <Form.Control type='password' value={formData.password} onChange={handleChange} name='password' required></Form.Control>
   </Form.Group>

   <Button variant='primary' type='submit'>LogIn</Button>
  
   </Form>
   


   </Container>
  )
}

export default LogIn