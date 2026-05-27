import React from 'react';
import { Container, Card, Row, Col, Badge } from 'react-bootstrap';

const About = () => {
  const techs = [
    { name: 'React 18', bg: 'primary' },
    { name: 'React Router v6', bg: 'success' },
    { name: 'React-Bootstrap', bg: 'info' },
    { name: 'Bootstrap 5', bg: 'secondary' }
  ];

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="shadow-sm">
            <Card.Header as="h5" className="bg-white">
              ℹ️ Giới thiệu
            </Card.Header>
            <Card.Body className="p-4">
              <Card.Text>
                Blog này được xây dựng như một dự án học tập môn SBA301.
              </Card.Text>
              
              <div className="mt-4">
                <h6>Công nghệ sử dụng:</h6>
                <div className="mt-3">
                  {techs.map((tech, index) => (
                    <Badge 
                      key={index} 
                      bg={tech.bg} 
                      className="me-2 p-2 mb-2"
                    >
                      {tech.name}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
