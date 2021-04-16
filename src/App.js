import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Book from './components/Dashboard/Book/Book';
// import Book from './components/Book/Book';
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
          <Route path="/admin">
            <Dashboard />
          </Route>
          <Route path="/admin/book/:id">
            <Book />
          </Route>
          <Route path="/admin/book-list">
            <BookingList />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
};

export default App;
