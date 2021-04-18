import React, { useContext, useEffect, useState } from 'react';
import { Spinner, Table } from 'react-bootstrap';
import { UserContext } from '../../../App';
import NotAccess from '../NotAccess/NotAccess';
import OrderListTable from '../OrderListTable/OrderListTable';

const OrderList = () => {
  const [loggedInUser, setLoggedInUser, admin, setAdmin] = useContext(
    UserContext
  );
  const [loadData, setLoadData] = useState(false);
  const [reload, setReload] = useState(false);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch('https://fierce-falls-59592.herokuapp.com/orders-list')
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        setLoadData(true);
        setReload(false);
      });
  }, [reload]);
  const [orderState, setOrderState] = useState({
    status: '',
  });
  const handleChange = (event) => {
    const name = event.target.name;
    setOrderState({
      ...orderState,
      [name]: event.target.value,
    });
  };
  const handleUpdate = (id) => {
    const updateState = orderState.status;
    setOrderState({
      status: '',
    });
    const data = { id, updateState };
    if (updateState && id) {
      fetch(`https://fierce-falls-59592.herokuapp.com/updateOrder/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result) {
            setReload(true);
            console.log(result);
          }
        });
    }
  };
  return (
    <>
      {loadData ? (
        <>
          <div className="p-3 d-flex justify-content-between dashboard__menu">
            <h3>Order List</h3>
            <h4 className="primary__color">{loggedInUser.displayName}</h4>
          </div>
          <div className="sidebar__right p-3">
            {admin ? (
              <Table>
                <thead className="tableHead">
                  <tr>
                    <th>Name</th>
                    <th>Email ID</th>
                    <th>Service Name</th>
                    <th>Pay With</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order, idx) => (
                    <OrderListTable
                      key={idx}
                      handleChange={handleChange}
                      handleUpdate={handleUpdate}
                      order={order}
                    />
                  ))}
                </tbody>
              </Table>
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

export default OrderList;
