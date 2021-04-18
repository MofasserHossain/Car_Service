import React from 'react';
import { Col } from 'react-bootstrap';

const BlogCard = ({ post }) => {
  const { name, img, text } = post;
  return (
    <Col md={4} className="my-2">
      <div className="blogCard serviceCard p-2 rounded">
        <img className="rounded" src={img} alt="" />
        <div className="service__dees p-2">
          <h5 style={{ fontWeight: '600' }}>{name}</h5>
          <p>{text}</p>
        </div>
      </div>
    </Col>
  );
};

export default BlogCard;
