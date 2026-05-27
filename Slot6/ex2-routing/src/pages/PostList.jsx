import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Badge, Form, InputGroup, Button } from 'react-bootstrap';
import { posts } from '../data/posts';

const PostList = () => {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('Tất cả');
  const navigate = useNavigate();

  const categories = ['Tất cả', ...new Set(posts.map(p => p.category))];

  const filteredPosts = posts.filter(post => {
    const matchSearch = post.title.toLowerCase().includes(search.toLowerCase());
    const matchCategory = activeCategory === 'Tất cả' || post.category === activeCategory;
    return matchSearch && matchCategory;
  });

  return (
    <Container className="py-4">
      <h2 className="mb-4">📚 Danh sách bài viết</h2>

      <Row className="mb-4">
        <Col md={6} className="mb-3 mb-md-0">
          <InputGroup>
            <Form.Control
              placeholder="Tìm kiếm bài viết..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {search && (
              <Button variant="outline-secondary" onClick={() => setSearch('')}>
                × Xóa
              </Button>
            )}
          </InputGroup>
        </Col>
        <Col md={6}>
          <div className="d-flex flex-wrap gap-2">
            {categories.map(cat => (
              <Button
                key={cat}
                variant={activeCategory === cat ? 'primary' : 'outline-primary'}
                onClick={() => setActiveCategory(cat)}
                size="sm"
              >
                {cat}
              </Button>
            ))}
          </div>
        </Col>
      </Row>

      {filteredPosts.length === 0 ? (
        <div className="text-center py-5">
          <p className="text-muted">Không tìm thấy bài viết nào.</p>
        </div>
      ) : (
        <Row>
          {filteredPosts.map(post => (
            <Col md={4} className="mb-4" key={post.id}>
              <Card 
                className="h-100 shadow-sm" 
                style={{ cursor: 'pointer' }} 
                onClick={() => navigate(`/posts/${post.id}`)}
              >
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <Badge bg="primary">{post.category}</Badge>
                    <small className="text-muted">{post.date}</small>
                  </div>
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Text>
                    {post.body.substring(0, 70)}...
                  </Card.Text>
                  <div className="mb-3">
                    {post.tags.map(tag => (
                      <Badge bg="light" text="dark" className="me-1 border" key={tag}>
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                </Card.Body>
                <Card.Footer className="bg-white border-top-0 text-muted">
                  <small>Bởi {post.author}</small>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default PostList;
