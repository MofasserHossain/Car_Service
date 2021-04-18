import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Post1 from '../../../images/blog-1.jpg';
import Post2 from '../../../images/blog-2.jpg';
import Post3 from '../../../images/blog-3.jpg';
import BlogCard from '../BlogCard/BlogCard';

const Blog = () => {
  const posts = [
    {
      name: 'Top 10 automotive advancements to look forward',
      img: Post1,
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua consectetur adipiscing elit.',
    },
    {
      name: 'What should you know before choosing a car repair shop',
      img: Post2,
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua consectetur adipiscing elit.',
    },
    {
      name: 'What is the cost of repairing a scratch on a car?',
      img: Post3,
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua consectetur adipiscing elit.',
    },
  ];
  return (
    <section>
      <div className="text-center title">
        <h6 className="primary__color font__bold">RECENT NEWS</h6>
        <h2>Success story posts</h2>
      </div>
      <Container className="mt-4">
        <Row>
          {posts.map((post, idx) => (
            <BlogCard key={idx} post={post} />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Blog;
