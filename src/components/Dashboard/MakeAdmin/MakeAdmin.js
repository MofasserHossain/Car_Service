import React from 'react';
import { Button } from 'react-bootstrap';
import './MakeAdmin.css';

const MakeAdmin = () => {
  return (
    <>
      <div className="p-3 d-flex justify-content-between">
        <h3>Make Admin</h3>
        <h3>User Name</h3>
      </div>
      <div className="sidebar__right rounded">
        <h4 className="p-3">Email</h4>
        <div className="px-3 form d-flex">
          <input type="text" placeholder="admin@gmail.com" />
          <Button className="btn button btn__link ml-2">Submit</Button>
        </div>
      </div>
    </>
  );
};

export default MakeAdmin;
