import React from 'react';
import { Col } from 'react-bootstrap';
import './BookingListCard.css';

const BookingListCard = ({ orders }) => {
  const { serviceName, serviceImage, serviceDesc, orderStatus } = orders;
  let className;
  switch (orderStatus) {
    case 'Pending':
      className = 'pending';
      break;
    case 'Done':
      className = 'done';
      break;
    case 'On-going':
      className = 'ongoing';
      break;
    default:
      className = 'default';
      break;
  }
  return (
    <Col md={4} className="my-2">
      <div className="bookingCard rounded">
        <div className="Card__top d-flex justify-content-between mb-3">
          <div className="img">
            <img className="rounded" src={serviceImage} alt={serviceName} />
          </div>
          <h2 className={className}>{orderStatus}</h2>
        </div>
        <h3>{serviceName}</h3>
        <p>{serviceDesc}</p>
      </div>
    </Col>
  );
};

export default BookingListCard;
