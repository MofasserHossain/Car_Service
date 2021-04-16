import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import './Dashboard.css';
import BookingList from '../BookingList/BookingList';
import Book from '../Book/Book';
import AddReview from '../AddReview/AddReview';
import AddService from '../AddService/AddService';
import Sidebar from '../Sidebar/Sidebar';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import OrderList from '../OrderList/OrderList';
const Dashboard = () => {
  const { path } = useRouteMatch();
  return (
    <div className="dashboard">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="content">
        <Switch>
          <Route exact path={path}>
            <OrderList />
          </Route>
          <Route path={`${path}/book/:id`}>
            <Book />
          </Route>
          <Route path={`${path}/book-list`}>
            <BookingList />
          </Route>
          <Route path={`${path}/addReview`}>
            <AddReview />
          </Route>
          <Route path={`${path}/addService`}>
            <AddService />
          </Route>
          <Route path={`${path}/make-admin`}>
            <MakeAdmin />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Dashboard;
