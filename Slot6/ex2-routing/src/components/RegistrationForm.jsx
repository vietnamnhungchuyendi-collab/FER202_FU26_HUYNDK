import React, { useState } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './RegistrationForm.css';

const RegistrationForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Validate Username
    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    }

    // Validate Email
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = 'Invalid email format';
      }
    }

    // Validate Password
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else {
      // At least 6 chars, uppercase, lowercase, number, special char
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
      if (!passwordRegex.test(formData.password)) {
        newErrors.password = 'Password must be at least 6 characters, include uppercase, lowercase, number, and special character';
      }
    }

    // Validate Confirm Password
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Confirm Password is required';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted successfully:', formData);
      navigate('/');
    }
  };

  const handleCancel = () => {
    setFormData({
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
    setErrors({});
  };

  return (
    <div className="registration-container">
      <div className="registration-card">
        <h2 className="registration-title">Create Account</h2>
        <Form onSubmit={handleSubmit} noValidate>
          
          <Form.Group className="mb-3" controlId="formUsername">
            <Form.Label className="form-label-custom">Username</Form.Label>
            <Form.Control
              type="text"
              name="username"
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleChange}
              className={`form-control-custom ${errors.username ? 'is-invalid' : ''}`}
            />
            {errors.username && <Form.Control.Feedback type="invalid" className="invalid-feedback-custom">{errors.username}</Form.Control.Feedback>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label className="form-label-custom">Email Address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="name@example.com"
              value={formData.email}
              onChange={handleChange}
              className={`form-control-custom ${errors.email ? 'is-invalid' : ''}`}
            />
            {errors.email && <Form.Control.Feedback type="invalid" className="invalid-feedback-custom">{errors.email}</Form.Control.Feedback>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label className="form-label-custom">Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Create a strong password"
              value={formData.password}
              onChange={handleChange}
              className={`form-control-custom ${errors.password ? 'is-invalid' : ''}`}
            />
            {errors.password && <Form.Control.Feedback type="invalid" className="invalid-feedback-custom">{errors.password}</Form.Control.Feedback>}
          </Form.Group>

          <Form.Group className="mb-4" controlId="formConfirmPassword">
            <Form.Label className="form-label-custom">Confirm Password</Form.Label>
            <Form.Control
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={`form-control-custom ${errors.confirmPassword ? 'is-invalid' : ''}`}
            />
            {errors.confirmPassword && <Form.Control.Feedback type="invalid" className="invalid-feedback-custom">{errors.confirmPassword}</Form.Control.Feedback>}
          </Form.Group>

          <Row className="g-3">
            <Col sm={6}>
              <button type="submit" className="btn-custom btn-register">
                Register
              </button>
            </Col>
            <Col sm={6}>
              <button type="button" className="btn-custom btn-cancel" onClick={handleCancel}>
                Cancel
              </button>
            </Col>
          </Row>

        </Form>
      </div>
    </div>
  );
};

export default RegistrationForm;
