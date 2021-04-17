import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Book from './components/Dashboard/Book/Book';
import BookingList from './components/Dashboard/BookingList/BookingList';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
export const UserContext = createContext();
const App = () => {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/admin">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path="/admin/book/:id">
            <Book />
          </PrivateRoute>
          <PrivateRoute path="/admin/book-list">
            <BookingList />
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
};

export default App;
