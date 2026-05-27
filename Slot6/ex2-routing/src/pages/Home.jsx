import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { posts } from '../data/posts';

const Home = () => {
  const latestPosts = posts.slice(0, 2);

  return (
    <Container className="py-5">
      <div className="text-center mb-5">
        <h1>📝 React Blog</h1>
        <p className="lead">"Nơi chia sẻ kiến thức React, Hooks và Frontend"</p>
        <div className="mb-3">
          <Badge bg="info">{posts.length} bài viết</Badge>
        </div>
        <Button as={Link} to="/posts" variant="primary">
          Xem tất cả bài viết →
        </Button>
      </div>

      <Row>
        {latestPosts.map(post => (
          <Col md={6} className="mb-4" key={post.id}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Badge bg="secondary" className="mb-2">{post.category}</Badge>
                <Card.Title>{post.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Bởi {post.author} vào ngày {post.date}
                </Card.Subtitle>
                <Card.Text>{post.body}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
