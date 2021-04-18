import React from 'react';
import { Container, Row } from 'react-bootstrap';
import TeamMember1 from '../../../images/team1.jpg';
import TeamMember2 from '../../../images/team2.jpg';
import TeamMember3 from '../../../images/team3.jpg';
import TeamMember4 from '../../../images/team4.jpg';
import TeamCard from '../TeamCard/TeamCard';

const Team = () => {
  const teams = [
    {
      name: 'Jerome Luel',
      position: 'CEO',
      img: TeamMember1,
    },
    {
      name: 'Andrew Learoyd',
      position: 'Managing Director',
      img: TeamMember2,
    },
    {
      name: 'Harry Nelis',
      position: 'Technology Officer',
      img: TeamMember3,
    },
    {
      name: 'Lucy Vernall',
      position: 'Chief Officer',
      img: TeamMember4,
    },
  ];
  return (
    <section className="team">
      <div className="text-center title">
        <h6 className="primary__color font__bold">EXPERT PEOPLE</h6>
        <h2>Our Team Members</h2>
      </div>
      <Container>
        <Row className="py-4 pt-5">
          {teams.map((team, idx) => (
            <TeamCard key={idx} team={team} />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Team;
