import React, { useContext, useEffect } from 'react';
import './Login.css';
import { useHistory, useLocation, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import jwt_decode from 'jwt-decode';
import {
  handleGoogleSignIn,
  initializeFirebaseFramework,
  storeAuthToken,
} from './LoginManager';
import { UserContext } from '../../../App';
const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const loginToken = sessionStorage.getItem('token');
  // . location
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: '/' } };
  initializeFirebaseFramework();

  const googleSignIn = () => {
    handleGoogleSignIn().then((res) => {
      setLoggedInUser(res);
      authToken();
      history.replace(from);
    });
  };
  const authToken = () => {
    storeAuthToken().then((result) => {
      sessionStorage.setItem('token', result);
      history.replace(from);
    });
  };
  useEffect(() => {
    if (loginToken) {
      const tokenDecoded = jwt_decode(loginToken);
      const { name, email, picture } = tokenDecoded;
      const user = {
        displayName: name,
        email: email,
        photo: picture,
      };
      setLoggedInUser(user);
      history.replace(from);
    }
  }, []);
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
