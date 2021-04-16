import React from 'react';
import './HeaderMain.css';
import { Button } from 'react-bootstrap';

const HeaderMain = () => {
  return (
    <div className="banner">
      <div className="banner__content">
        <h3>
          Your trusted <span className="primary__color">auto repair</span> shop
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aut
          quidem temporibus quam nostrum at?
        </p>
        <Button className="btn button">Appointment Now</Button>
      </div>
    </div>
  );
};

export default HeaderMain;
