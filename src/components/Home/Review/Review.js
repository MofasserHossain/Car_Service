import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Review1 from '../../../images/review-1.jpg';
import Review2 from '../../../images/review-2.jpg';
import Review3 from '../../../images/review-3.jpg';
import ReviewCard from '../ReviewCard/ReviewCard';

const Review = () => {
  const reviews = [
    {
      name: 'Volker T.',
      img: Review1,
      review:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut voluptas reprehenderit dolores nostrum, asperiores amet quasi, qui magni quidem culpa facilis quaerat porro omnis dicta beatae? Perferendis distinctio dolor reprehenderit.',
    },
    {
      name: 'Michaela S.',
      img: Review2,
      review:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut voluptas reprehenderit dolores nostrum, asperiores amet quasi, qui magni quidem culpa facilis quaerat porro omnis dicta beatae? Perferendis distinctio dolor reprehenderit.',
    },
    {
      name: 'Daniel M.',
      img: Review3,
      review:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut voluptas reprehenderit dolores nostrum, asperiores amet quasi, qui magni quidem culpa facilis quaerat porro omnis dicta beatae? Perferendis distinctio dolor reprehenderit.',
    },
  ];
  return (
    <section className="review ">
      <div className="text-center ">
        <h6 className="primary__color font__bold">CLIENT REVIEW</h6>
        <h2>Our Service Review</h2>
      </div>
      <Container>
        <Row className="py-4 pt-5">
          {reviews.map((review) => (
            <ReviewCard reviewInfo={review} />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Review;
