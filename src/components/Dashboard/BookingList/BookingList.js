import React, { useContext, useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import BookingListCard from '../BookingListCard/BookingListCard';
const BookingList = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [loadData, setLoadData] = useState(false);
  const [userOrders, setUserOrders] = useState([]);
  useEffect(() => {
    fetch(
      `https://fierce-falls-59592.herokuapp.com/order?email=${loggedInUser.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUserOrders(data);
        setLoadData(true);
      });
  }, []);
  return (
    <>
      {loadData ? (
        <>
          <div className="p-3 d-flex justify-content-between">
            <h3>Book List</h3>
            <h4 className="primary__color">{loggedInUser.displayName}</h4>
          </div>
          <div className="sidebar__right p-3">
            <p>Number of Orders {userOrders.length}</p>
            <div className="p-3">
              {userOrders.length > 0 ? (
                <Row>
                  {userOrders.map((orders, idx) => (
                    <BookingListCard key={idx} orders={orders} />
                  ))}
                </Row>
              ) : (
                <>
                  <h3 className="text-center">Your Haven't Order Yet</h3>
                  <span
                    style={{ textDecoration: 'underline' }}
                    className="d-block text-center"
                  >
                    <Link to={'/'}>Back To Home</Link>
                  </span>
                </>
              )}
            </div>
          </div>
        </>
      ) : (
        <div className="spinner">
          <Spinner animation="border" variant="primary" />
        </div>
      )}
    </>
  );
};

export default BookingList;
