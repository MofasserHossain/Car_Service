import React from 'react';
import './ReviewCard.css';
import { Col } from 'react-bootstrap';

const ReviewCard = ({ reviewInfo }) => {
  const { name, img, review } = reviewInfo;
  return (
    <Col md={6}>
      <div className="review-main">
        <div className="review-item rounded">
          <img className="review-img" src={img} alt="" />
          <h3>{name}</h3>
          <p>
            <span className="quote-icon-left">"</span>
            {review}
            <span className="quote-icon-right">"</span>
          </p>
        </div>
      </div>
    </Col>
  );
};

export default ReviewCard;
