
// import firebase from './firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBCf9GMd_ptOx1XA2oCL9N2TjvbTRvY2bA",
  authDomain: "hackathon-4b1c8.firebaseapp.com",
  projectId: "hackathon-4b1c8",
  storageBucket: "hackathon-4b1c8.appspot.com",
  messagingSenderId: "277144691412",
  appId: "1:277144691412:web:d6a17173441374854a1141",
  measurementId: "G-BEC52YWD7G"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
