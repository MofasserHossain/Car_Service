import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotAccess = () => {
  return (
    <div className="noAccess">
      <h3>Sorry You Have No Access in This Page</h3>
      <div className="d-flex mt-3">
        <Button className="btn button">
          <Link to={'/'} className="btn__link">
            Back to Home Page
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotAccess;
