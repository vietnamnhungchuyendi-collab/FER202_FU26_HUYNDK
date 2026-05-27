import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Container, Row, Col, Card, Badge, Button, Alert } from 'react-bootstrap';
import { posts } from '../data/posts';

const PostDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const post = posts.find(p => p.id === Number(id));
  const currentIndex = posts.findIndex(p => p.id === Number(id));
  
  const prevPost = currentIndex > 0 ? posts[currentIndex - 1] : null;
  const nextPost = currentIndex < posts.length - 1 && currentIndex !== -1 ? posts[currentIndex + 1] : null;

  if (!post) {
    return (
      <Container className="py-5 text-center">
        <Alert variant="warning">Không tìm thấy bài viết!</Alert>
        <Button as={Link} to="/posts" variant="primary">
          Quay về danh sách
        </Button>
      </Container>
    );
  }

  return (
    <Container className="py-4">
      <Button variant="link" className="text-decoration-none mb-3 p-0" onClick={() => navigate(-1)}>
        ← Quay lại
      </Button>
      
      <Card className="shadow-sm">
        <Card.Body className="p-4 p-md-5">
          <Badge bg="primary" className="mb-3">{post.category}</Badge>
          <h1 className="mb-4">{post.title}</h1>
          <div className="text-muted mb-4 pb-3 border-bottom">
            <strong>Bởi:</strong> {post.author} <span className="mx-2">|</span> 
            <strong>Ngày:</strong> {post.date}
          </div>
          
          <Card.Text style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
            {post.body}
          </Card.Text>
          
          <div className="mt-5">
            <strong>Tags:</strong>
            <div className="mt-2">
              {post.tags.map(tag => (
                <Badge bg="light" text="dark" className="me-2 border" key={tag}>
                  #{tag}
                </Badge>
              ))}
            </div>
          </div>
        </Card.Body>
        <Card.Footer className="bg-white border-top-0 d-flex justify-content-between p-4">
          {prevPost ? (
            <Button as={Link} to={`/posts/${prevPost.id}`} variant="outline-primary">
              ← Bài trước
            </Button>
          ) : (
            <div></div>
          )}
          
          {nextPost ? (
            <Button as={Link} to={`/posts/${nextPost.id}`} variant="outline-primary">
              Bài sau →
            </Button>
          ) : (
            <div></div>
          )}
        </Card.Footer>
      </Card>
    </Container>
  );
};

export default PostDetail;
