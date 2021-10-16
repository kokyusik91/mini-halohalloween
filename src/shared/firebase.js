import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
// import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'mini-team4.firebaseapp.com',
  projectId: 'mini-team4',
  storageBucket: 'mini-team4.appspot.com',
  messagingSenderId: '751409351930',
  appId: '1:751409351930:web:630d2c6d9099d3075c0d43',
  measurementId: 'G-0QP8P1KNYZ',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const apiKey = firebaseConfig.apiKey;
const storage = firebase.storage();

export { apiKey, storage };
