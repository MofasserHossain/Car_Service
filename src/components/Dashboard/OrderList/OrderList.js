import React, { useContext, useEffect, useState } from 'react';
import { Spinner, Table } from 'react-bootstrap';
import { UserContext } from '../../../App';
import OrderListTable from '../OrderListTable/OrderListTable';

const OrderList = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [updateLoader, setUpdateLoader] = useState(false);
  const [loadData, setLoadData] = useState(false);
  const [reload, setReload] = useState(false);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/orders-list')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setOrders(data);
        setLoadData(true);
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
    console.log('id', id);
    const updateState = orderState.status;
    const data = { id, updateState };
    if (updateState) {
      fetch(`http://localhost:5000/updateOrder/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result) {
            setReload(true);
            setUpdateLoader(true);
            console.log(result);
          }
          // console.log('update successful', data);
        });
    }
  };
  console.log(orderState, orders);
  return (
    <>
      {loadData ? (
        <>
          <div className="p-3 d-flex justify-content-between">
            <h3>Order List</h3>
            <h4 className="primary__color">{loggedInUser.displayName}</h4>
          </div>
          <div className="sidebar__right p-3">
            <h3>Order List</h3>
            <Table>
              <thead>
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
