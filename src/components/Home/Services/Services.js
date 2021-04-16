import React from 'react';
import EngineDia from '../../../images/ENGINE DIAGNOSTICS.jpg';
import LubeOil from '../../../images/LUBE OIL AND FILTERS.jpg';
import BeltHoses from '../../../images/BELTS AND HOSES.jpg';
import { Container, Row } from 'react-bootstrap';
import ServiceCard from '../ServiceCard/ServiceCard';
const Services = () => {
  const services = [
    {
      name: 'ENGINE DIAGNOSTICS',
      price: 221,
      img: EngineDia,
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam consequatur optio aut aliquid consequuntur quo!',
    },
    {
      name: 'LUBE, OIL AND FILTERS',
      price: 110,
      img: LubeOil,
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam consequatur optio aut aliquid consequuntur quo!',
    },
    {
      name: 'BELTS AND HOSES',
      price: 150,
      img: BeltHoses,
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam consequatur optio aut aliquid consequuntur quo!',
    },
  ];
  return (
    <section>
      <div className="text-center">
        <h6 className="primary__color font__bold">OUR SERVICES</h6>
        <h2>Our Featured Services</h2>
      </div>
      <Container>
        <Row className="py-4 pt-5">
          {services.map((service) => (
            <ServiceCard service={service} />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
