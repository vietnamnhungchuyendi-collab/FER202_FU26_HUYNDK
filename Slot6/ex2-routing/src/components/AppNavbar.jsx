import React from 'react';
import { Navbar, Nav, Container, Badge } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const AppNavbar = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="md" sticky="top">
      <Container>
        <Navbar.Brand as={NavLink} to="/">Routing App <Badge bg="info">Ex2</Badge></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" end>🏠 Trang chủ</Nav.Link>
            <Nav.Link as={NavLink} to="/posts">📚 Bài viết</Nav.Link>
            <Nav.Link as={NavLink} to="/about">ℹ️ Giới thiệu</Nav.Link>
            <Nav.Link as={NavLink} to="/register">📝 Đăng ký</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
