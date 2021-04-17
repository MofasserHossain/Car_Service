import React from 'react';
import './ReviewCard.css';
import { Col } from 'react-bootstrap';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import DemoImg from '../../../images/default_profile.png';

const ReviewCard = ({ reviewInfo }) => {
  const { name, userImg, review, companyName, rating } = reviewInfo;
  return (
    <Col md={6} className="my-3">
      <div className="review-main">
        <div className="review-item rounded">
          {userImg ? (
            <img className="review-img" src={userImg} alt={name} />
          ) : (
            <img src={DemoImg} alt="demo" />
          )}
          <h3>{name}</h3>
          <span>{companyName}</span>
          <Box className="mt-2" component="fieldset" borderColor="transparent">
            <Rating name="read-only" value={rating} readOnly />
          </Box>
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
