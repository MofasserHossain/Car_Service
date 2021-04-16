import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus,
  faThLarge,
  faShoppingCart,
  faShoppingBasket,
  faCommentDots,
  faUserPlus,
} from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  const { url } = useRouteMatch();
  return (
    <>
      <span className="home">
        <Link className="primary__color" to={'/'}>
          CARSERVICE
        </Link>
      </span>
      <Link to={`${url}/book`}>
        <span>
          <FontAwesomeIcon icon={faShoppingCart} />
        </span>
        Book
      </Link>
      <Link to={`${url}/book-list`}>
        <span>
          <FontAwesomeIcon icon={faShoppingBasket} />
        </span>
        Book List
      </Link>
      <Link to={`${url}/addReview`}>
        <span>
          <FontAwesomeIcon icon={faCommentDots} />
        </span>
        Add Review
      </Link>
      <Link to={`${url}`}>
        <span>
          <FontAwesomeIcon icon={faShoppingBasket} />
        </span>
        Order List
      </Link>
      <Link to={`${url}/addService`}>
        <span>
          <FontAwesomeIcon icon={faPlus} />
        </span>
        Add Service
      </Link>
      <Link to={`${url}/make-admin`}>
        <span>
          <FontAwesomeIcon icon={faUserPlus} />
        </span>
        Make Admin
      </Link>
      <Link to={`${url}/manage-service`}>
        <span>
          <FontAwesomeIcon icon={faThLarge} />
        </span>
        Manage Services
      </Link>
    </>
  );
};

export default Sidebar;
