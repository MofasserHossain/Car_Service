import React, { useContext, useState } from 'react';
import './Login.css';
// import firebase from 'firebase/app';
import 'firebase/auth';
import { useHistory, useLocation, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
// import jwt_decode from 'jwt-decode';
import {
  handleGoogleSignIn,
  initializeFirebaseFramework,
} from './LoginManager';
import { UserContext } from '../../../App';
const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  // . location
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: '/' } };
  initializeFirebaseFramework();
  const [user, setUser] = useState({
    isSigned: false,
    displayName: '',
    email: '',
    photo: '',
    error: '',
  });
  const googleSignIn = () => {
    handleGoogleSignIn().then((res) => {
      setUser(res);
      setLoggedInUser(res);
      //   storeAuthToken();
      history.replace(from);
    });
  };
  //   const storeAuthToken = () => {
  //     firebase
  //       .auth()
  //       .currentUser.getIdToken(/* forceRefresh */ true)
  //       .then(function (idToken) {
  //         sessionStorage.setItem('token', idToken);
  //       })
  //       .catch(function (error) {
  //         // Handle error
  //       });
  //   };

  return (
    <div className="login text-center">
      <h3 className="py-4">
        <Link className="links__color menu__icon primary__color" to={'/'}>
          CarService
        </Link>
      </h3>
      <div className="formDiv">
        <div className="otherSignIn text-center">
          <h3>Log In with</h3>
          <button onClick={googleSignIn}>
            <span className="google">
              <FontAwesomeIcon icon={faGoogle} />
            </span>
            Sign In With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
