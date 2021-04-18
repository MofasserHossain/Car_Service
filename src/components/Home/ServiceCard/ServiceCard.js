import React from 'react';
import { Col, Button } from 'react-bootstrap';
import './ServiceCard.css';
import { Link } from 'react-router-dom';
import Icon from '../../../images/diagnostic.png';

const ServiceCard = ({ service }) => {
  const { _id, serviceName, servicePrice, serviceImage, serviceDesc } = service;
  const background = {
    background: `url(${serviceImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    borderRadius: '5px',
  };
  return (
    <Col md={6} lg={4} className="my-3">
      <div style={background} className="service">
        <div className="main">
          <h3>{serviceName}</h3>
          <Button className="btn button">
            <Link className="btn__link" to={`/admin/book/${_id}`}>
              Book Service
            </Link>
          </Button>
        </div>
        <div className="overlay text-center">
          <div className="icon mb-2">
            <img src={Icon} alt="" />
          </div>
          <h3>{serviceName}</h3>
          <p>{serviceDesc}</p>
        </div>
      </div>
    </Col>
  );
};

export default ServiceCard;
