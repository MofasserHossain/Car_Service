import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import ServiceCard from '../ServiceCard/ServiceCard';

const Services = () => {
  const [services, setServices] = useState([]);
  const [loadData, setLoadData] = useState(false);
  useEffect(() => {
    const url = 'http://localhost:5000/services';
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setServices(data);
        setLoadData(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <section>
      <div className="text-center">
        <h6 className="primary__color font__bold">OUR SERVICES</h6>
        <h2>Our Featured Services</h2>
      </div>
      {loadData ? (
        <Container>
          <Row className="py-4">
            {services.map((service, idx) => (
              <ServiceCard key={idx} service={service} />
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

export default Services;
