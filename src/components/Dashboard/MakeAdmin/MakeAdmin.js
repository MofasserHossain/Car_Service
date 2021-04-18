import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';
import NotAccess from '../NotAccess/NotAccess';
import './MakeAdmin.css';
const axios = require('axios');
const MakeAdmin = () => {
  const [loggedInUser, setLoggedInUser, admin, setAdmin] = useContext(
    UserContext
  );
  const [updateStatus, setUpdateStatus] = useState(false);
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
    const url = `https://fierce-falls-59592.herokuapp.com/addAdmin`;
    axios
      .post(url, data)
      .then((res) => {
        if (res) {
          setUpdateStatus(true);
          console.log(res);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className="p-3 d-flex justify-content-between">
        <h3>Make Admin</h3>
        <h4 className="primary__color">{loggedInUser.displayName}</h4>
      </div>
      <div className="sidebar__right pb-3 rounded">
        {admin ? (
          <>
            <h4 className="p-3">Email</h4>
            {updateStatus && (
              <p style={{ color: 'green', marginLeft: '15px' }}>
                Email Added SuccessFully
              </p>
            )}
            <div className="px-3 py-3 adminForm form">
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  type="text"
                  name="email"
                  className="input"
                  ref={register({ required: true })}
                  placeholder="admin@gmail.com"
                />
                {errors.email && (
                  <span style={{ color: 'red' }}> This Field Is Required</span>
                )}
                <input
                  type="submit"
                  value="Submit"
                  className="btn button btn__link btn_admin"
                />
              </form>
            </div>
          </>
        ) : (
          <NotAccess />
        )}
      </div>
    </>
  );
};

export default MakeAdmin;
