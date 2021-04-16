import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapMarkerAlt,
  faEnvelope,
  faPhoneAlt,
} from '@fortawesome/free-solid-svg-icons';
import './Footer.css';
const Footer = () => {
  return (
    <Container>
      <Row className="py-3">
        <Col md={6} lg={3}>
          <h3 className="links__color menu__icon primary__color">CarService</h3>
          <div className="footer__icon">
            <ul>
              <li>
                <span>
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                </span>
                2112 Washington DC, USA
              </li>
              <li>
                <span>
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                car.service@mail.com
              </li>
              <li>
                <span>
                  <FontAwesomeIcon icon={faPhoneAlt} />
                </span>
                +12454352532443
              </li>
            </ul>
          </div>
        </Col>
        <Col md={6} lg={3}>
          <h3>Our Service</h3>
          <ul className="f__service">
            <li>ENGINE DIAGNOSTICS</li>
            <li>LUBE, OIL AND FILTERS</li>
            <li>BELTS AND HOSES</li>
            <li>CAR WASHING</li>
          </ul>
        </Col>
        <Col md={6} lg={3}>
          <h3>Our Team</h3>
          <ul className="f__service">
            <li>Jerome Luel</li>
            <li>Andrew Learoyd</li>
            <li>Harry Nelis</li>
            <li>Lucy Vernall</li>
          </ul>
        </Col>
        <Col md={6} lg={3}>
          <h3>Working Hour</h3>
          <ul className="f__workingTime">
            <li>
              <span>Monday</span>
              <span>8.00AM - 6.00 PM</span>
            </li>
            <li>
              <span>Tuesday</span>
              <span>8.00AM - 6.00 PM</span>
            </li>
            <li>
              <span>Wednesday</span>
              <span>8.00AM - 6.00 PM</span>
            </li>
            <li>
              <span>Thursday</span>
              <span>8.00AM - 6.00 PM</span>
            </li>
          </ul>
        </Col>
      </Row>
      <p className="text-center d-block">
        Copy Right &copy; 2021 | All Right Reserved By Mofasser Hossain
      </p>
    </Container>
  );
};

export default Footer;
