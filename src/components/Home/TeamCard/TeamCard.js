import React from 'react';

import { Col } from 'react-bootstrap';
const TeamCard = ({ team }) => {
  const { name, position, img } = team;
  return (
    <Col md={6} lg={3} className="teamCard">
      <img className="rounded" src={img} alt={name} />
      <div className="text-center py-3 team">
        <h3>{name}</h3>
        <span style={{ fontWeight: '600' }} className="primary__color">
          {position}
        </span>
      </div>
    </Col>
  );
};

export default TeamCard;
