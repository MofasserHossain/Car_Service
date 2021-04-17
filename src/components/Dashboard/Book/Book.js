import React, { useContext, useEffect, useState } from 'react';
import './Book.css';
import { useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import { Spinner } from 'react-bootstrap';
import ProcessPayment from '../ProcessPayment/ProcessPayment';
const axios = require('axios');

const Book = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  // const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [loadData, setLoadData] = useState(false);
  const [serviceData, setServiceData] = useState({});
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    fetch(`http://localhost:5000/service/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setServiceData(data[0]);
        setLoadData(true);
      });
  }, [loadData]);
  const { displayName, email } = loggedInUser;
  const { serviceName, servicePrice, serviceImage, serviceDesc } = serviceData;
  const handlePayment = (paymentMethod) => {
    const paymentInfo = {
      userName: displayName,
      email: email,
      serviceName,
      servicePrice,
      serviceImage,
      serviceDesc,
      paymentId: paymentMethod.id,
      payWith: paymentMethod.card.brand,
      date: new Date(),
      orderStatus: 'Pending',
    };
    console.log(paymentMethod, paymentInfo);
    const url = `http://localhost:5000/addOrder`;
    axios
      .post(url, paymentInfo)
      .then((res) => {
        if (res) {
          // setPaymentSuccess(true);
          history.push('/admin/book-list');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="p-3 d-flex justify-content-between">
        <h3>Book</h3>
        <h4 className="primary__color">{loggedInUser.displayName}</h4>
      </div>
      <div className="sidebar__right p-3">
        {loadData ? (
          <>
            <div className="bookData">
              <label>User Name</label>
              <h3>{displayName}</h3>
              <label>User Email</label>
              <h3>{email}</h3>
              <label>Service Name</label>
              <h3>{serviceName}</h3>
            </div>
            <div className="payment">
              <h5 className="py-4">Pay With Stripe</h5>
              <ProcessPayment
                servicePrice={servicePrice}
                handlePayment={handlePayment}
              />
            </div>
          </>
        ) : (
          <div className="spinner">
            <Spinner animation="border" variant="primary" />
          </div>
        )}
      </div>
    </>
  );
};

export default Book;
