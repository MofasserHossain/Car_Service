import React, { useContext } from 'react';
import { UserContext } from '../../../App';

const OrderList = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <>
      <div className="p-3 d-flex justify-content-between">
        <h3>Order List</h3>
        <h4 className="primary__color">{loggedInUser.displayName}</h4>
      </div>
      <div className="sidebar__right p-3">
        <h3>Order List</h3>
      </div>
    </>
  );
};

export default OrderList;
