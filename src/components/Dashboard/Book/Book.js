import React from 'react';

import { useParams } from 'react-router-dom';

const Book = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <>
      <div className="p-3 d-flex justify-content-between">
        <h3>Book</h3>
        <h3>User Name</h3>
      </div>
      <div className="sidebar__right p-3">
        <h3>Book</h3>
      </div>
    </>
  );
};

export default Book;
