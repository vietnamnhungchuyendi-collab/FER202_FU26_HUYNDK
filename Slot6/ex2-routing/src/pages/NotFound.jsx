import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Container className="py-5 text-center">
      <h1 className="display-1 fw-bold text-danger">404</h1>
      <h2 className="mb-3">Trang không tồn tại</h2>
      <p className="lead mb-4">URL bạn đâu đó sai rồi!</p>
      <Button as={Link} to="/" variant="primary">
        Về trang chủ
      </Button>
    </Container>
  );
};

export default NotFound;
