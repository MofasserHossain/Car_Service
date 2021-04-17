import React, { useContext, useEffect, useState } from 'react';
import './Book.css';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../../App';

const Book = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [serviceData, setServiceData] = useState({});
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    fetch(`http://localhost:5000/service/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setServiceData(data[0]);
      });
  }, []);
  const { displayName, email } = loggedInUser;
  const { serviceName, servicePrice } = serviceData;
  return (
    <>
      <div className="p-3 d-flex justify-content-between">
        <h3>Book</h3>
        <h4 className="primary__color">{loggedInUser.displayName}</h4>
      </div>
      <div className="sidebar__right p-3">
        <div className="bookData">
          <h3>{displayName}</h3>
          <h3>{email}</h3>
          <h3>{serviceName}</h3>
        </div>
      </div>
    </>
  );
};

export default Book;
