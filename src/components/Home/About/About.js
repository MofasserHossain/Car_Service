import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AboutUs from '../../../images/about.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './About.css';
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

const About = () => {
  return (
    <section className="about">
      <div className="text-center">
        <h6 className="primary__color font__bold">ABOUT US</h6>
        <h2>About Our Services</h2>
      </div>
      <Container>
        <Row className="py-4 pt-5">
          <Col md={5}>
            <img className="rounded" src={AboutUs} alt="" />
          </Col>
          <Col md={{ span: 6, offset: 1 }}>
            <h3>Welcome To Our Service</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              reprehenderit inventore ad voluptatum expedita doloremque, animi
              dolor laboriosam maiores atque perspiciatis velit deserunt eaque
              eum quo natus delectus ea aliquam. Aperiam doloremque
              voluptatibus, in aspernatur voluptates dicta animi vitae, fugit
              obcaecati esse sapiente quasi distinctio dolorem voluptate facilis
              cum aliquam possimus eaque repellendus? Iste, harum est! Dolorum
              optio aliquam libero! Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Illo fuga incidunt nobis eum iste facilis
              quaerat reiciendis et, fugit sit?
            </p>
            <div className="icon">
              <span>
                <FontAwesomeIcon icon={faFacebookF} />
              </span>
              <span>
                <FontAwesomeIcon icon={faTwitter} />
              </span>
              <span>
                <FontAwesomeIcon icon={faInstagram} />
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
