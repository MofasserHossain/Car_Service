import React from 'react';
import { Col, Button } from 'react-bootstrap';
import './ServiceCard.css';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
  const { _id, serviceName, servicePrice, serviceImage, serviceDesc } = service;
  return (
    <Col md={4} className="my-3">
      <div className="service">
        <img className="rounded" src={serviceImage} alt="" />
        <div className="service__dees p-2">
          <h3>{serviceName}</h3>
          <p>{serviceDesc}</p>
          <div className="d-flex justify-content-between align-content-center">
            <h3 className="price">{servicePrice}$</h3>
            <Button className="btn button">
              <Link className="btn__link" to={`/admin/book/${_id}`}>
                Book Service
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default ServiceCard;
