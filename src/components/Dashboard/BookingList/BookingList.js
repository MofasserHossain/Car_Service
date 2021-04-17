import React, { useContext, useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import { UserContext } from '../../../App';
import BookingListCard from '../BookingListCard/BookingListCard';
const BookingList = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [loadData, setLoadData] = useState(false);
  const [userOrders, setUserOrders] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/order?email=${loggedInUser.email}`)
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
            <h3>Book List</h3>
            <div className="p-3">
              <Row>
                {userOrders.map((orders, idx) => (
                  <BookingListCard key={idx} orders={orders} />
                ))}
              </Row>
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
