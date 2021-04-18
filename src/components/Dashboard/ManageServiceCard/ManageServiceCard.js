import React from 'react';
import { Button, Col } from 'react-bootstrap';
import './ManageServiceCard.css';

const ManageServiceCard = ({ service, deleteService }) => {
  const { _id, serviceName, serviceImage, serviceDesc } = service;
  return (
    <Col md={4} className="my-3">
      <div className="bookingCard rounded">
        <div className="Card__top d-flex justify-content-between mb-3">
          <div className="img">
            <img className="rounded" src={serviceImage} alt={serviceName} />
          </div>
          <span>
            <Button onClick={() => deleteService(_id)} className="btn delete">
              Delete
            </Button>
          </span>
        </div>
        <h3>{serviceName}</h3>
        <p>{serviceDesc}</p>
      </div>
    </Col>
  );
};

export default ManageServiceCard;
