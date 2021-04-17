import React from 'react';
import { Button, Col } from 'react-bootstrap';
import './ManageServiceCard.css';

const ManageServiceCard = ({ service, deleteService }) => {
  const { _id, serviceName, servicePrice, serviceImage } = service;
  return (
    <Col md={4} className="my-3">
      <div className="manageService d-flex">
        <div className="img">
          <img className="rounded" src={serviceImage} alt={serviceName} />
        </div>
        <div className="serviceContent">
          <h4>{serviceName}</h4>
          <div className="d-flex justify-content-between mt-4">
            <span>{servicePrice}$</span>
            <Button
              onClick={() => deleteService(_id)}
              className="btn btn-danger delete"
            >
              Delete
            </Button>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default ManageServiceCard;
