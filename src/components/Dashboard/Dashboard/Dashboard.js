import React from 'react';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import './Dashboard.css';
import BookingList from '../BookingList/BookingList';
import Book from '../Book/Book';
import AddReview from '../AddReview/AddReview';
import AddService from '../AddService/AddService';
import Sidebar from '../Sidebar/Sidebar';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import OrderList from '../OrderList/OrderList';
import ManageService from '../ManageService/ManageService';
import EmptyBook from '../EmptyBook/EmptyBook';
const Dashboard = () => {
  const { path } = useRouteMatch();
  return (
    <div className="dashboard">
      <div className="sidebar">
        <h3 className="home">
          <Link className="primary__color" to={'/'}>
            CARSERVICE
          </Link>
        </h3>
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
          <Route path={`${path}/book`}>
            <EmptyBook />
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
          <Route path={`${path}/manage-service`}>
            <ManageService />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Dashboard;
