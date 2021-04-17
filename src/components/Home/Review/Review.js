import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import ReviewCard from '../ReviewCard/ReviewCard';

const Review = () => {
  const [reviews, setReviews] = useState([]);
  const [loadData, setLoadData] = useState(false);
  useEffect(() => {
    const url = 'http://localhost:5000/reviews';
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setReviews(data);
        setLoadData(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <section className="review ">
      <div className="text-center ">
        <h6 className="primary__color font__bold">CLIENT REVIEW</h6>
        <h2>Our Service Review</h2>
      </div>
      {loadData ? (
        <Container>
          <Row className="py-4">
            {reviews.map((review, idx) => (
              <ReviewCard key={idx} reviewInfo={review} />
            ))}
          </Row>
        </Container>
      ) : (
        <div className="spin">
          <Spinner animation="border" variant="primary" />
        </div>
      )}
    </section>
  );
};

export default Review;
