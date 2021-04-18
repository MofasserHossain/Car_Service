import React, { useContext, useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import { UserContext } from '../../../App';
import ManageServiceCard from '../ManageServiceCard/ManageServiceCard';
import NotAccess from '../NotAccess/NotAccess';

const ManageService = () => {
  const [loggedInUser, setLoggedInUser, admin, setAdmin] = useContext(
    UserContext
  );
  const [loadData, setLoadData] = useState(false);
  const [deleteData, setDeleteData] = useState(false);
  const [manageServices, setManageServices] = useState([]);
  useEffect(() => {
    const url = 'https://fierce-falls-59592.herokuapp.com/services';
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setManageServices(data);
        setLoadData(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [deleteData]);

  const deleteService = (id) => {
    console.log(id);
    // deleteService
    const url = `https://fierce-falls-59592.herokuapp.com/deleteService/${id}`;
    fetch(url, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setDeleteData(true);
        }
      });
  };
  return (
    <>
      {loadData ? (
        <>
          <div className="p-3 d-flex justify-content-between">
            <h3>Add Review</h3>
            <h4 className="primary__color">{loggedInUser.displayName}</h4>
          </div>
          <div className="sidebar__right p-3">
            {admin ? (
              <Row>
                {manageServices.map((service, idx) => (
                  <ManageServiceCard
                    key={idx}
                    deleteService={deleteService}
                    service={service}
                  />
                ))}
              </Row>
            ) : (
              <NotAccess />
            )}
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

export default ManageService;
