import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const EmptyBook = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <>
      <div className="p-3 d-flex justify-content-between dashboard__menu">
        <h3>Order List</h3>
        <h4 className="primary__color">{loggedInUser.displayName}</h4>
      </div>
      <div className="sidebar__right p-3">
        <h3 style={{ color: '#6b7c93' }} className="text-center">
          Your Card is Empty
        </h3>
        <span
          style={{ textDecoration: 'underline' }}
          className="d-block text-center"
        >
          <Link className="backToHome" to={'/'}>
            Back To Home
          </Link>
        </span>
      </div>
    </>
  );
};

export default EmptyBook;
