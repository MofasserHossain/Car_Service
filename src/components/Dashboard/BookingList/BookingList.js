import React, { useContext } from 'react';
import { UserContext } from '../../../App';
const BookingList = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <>
      <div className="p-3 d-flex justify-content-between">
        <h3>Book List</h3>
        <h4 className="primary__color">{loggedInUser.displayName}</h4>
      </div>
      <div className="sidebar__right p-3">
        <h3>Book List</h3>
      </div>
    </>
  );
};

export default BookingList;
