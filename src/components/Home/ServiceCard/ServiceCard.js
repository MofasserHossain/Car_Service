import React from 'react';
import { Col, Button } from 'react-bootstrap';
import './ServiceCard.css';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
  const { name, price, img, description } = service;
  return (
    <Col md={4}>
      <div className="service">
        <img className="rounded" src={img} alt="" />
        <div className="service__dees p-2">
          <h3>{name}</h3>
          <p>{description}</p>
          <div className="d-flex justify-content-between align-content-center">
            <h3 className="price">{price}$</h3>
            <Button className="btn button">
              <Link className="btn__link" to={`/admin/book/${name}`}>
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
