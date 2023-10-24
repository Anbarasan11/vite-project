import { useState } from "react";
import React from "react";
import "../styles/SignUp.css";
import { Container, Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

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
      <h1>Registration Form</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={formData.name}
            onChange={handleChange}
            name="name"
            required
          ></Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={formData.email}
            onChange={handleChange}
            name="email"
            required
          ></Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={formData.password}
            onChange={handleChange}
            name="password"
            required
          ></Form.Control>
        </Form.Group>

        <Button variant="primary" type="submit">
          Register
        </Button>
        <p>
          Already have an Account? <Link to="/login">Login</Link>
        </p>
      </Form>
    </Container>
  );
};

export default SignUp;
