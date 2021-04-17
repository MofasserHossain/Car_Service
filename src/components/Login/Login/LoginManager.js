import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebase.config';

export const initializeFirebaseFramework = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app();
  }
};

export const handleGoogleSignIn = async () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  return firebase
    .auth()
    .signInWithPopup(googleProvider)
    .then((res) => {
      const { displayName, photoURL, email } = res.user;
      const signedInUser = {
        isSigned: true,
        displayName: displayName,
        email: email,
        photo: photoURL,
        success: true,
      };
      //   console.log(res);
      return signedInUser;
    })
    .catch((error) => {
      var errorMessage = error.message;
      const signedInUser = {
        error: errorMessage,
        success: false,
      };
      return signedInUser;
    });
};

export const storeAuthToken = () => {
  return firebase
    .auth()
    .currentUser.getIdToken(/* forceRefresh */ true)
    .then(function (idToken) {
      return idToken;
    })
    .catch(function (error) {
      // Handle error
      return error;
    });
};
