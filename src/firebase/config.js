import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyBuY1jjdNPS6oW5PMpqwO7_2ZgL55KNfGI",
  authDomain: "creativeappjoe.firebaseapp.com",
  projectId: "creativeappjoe",
  storageBucket: "creativeappjoe.appspot.com",
  messagingSenderId: "92514853130",
  appId: "1:92514853130:web:cc5ee848c5298a6fc9daf3",
  measurementId: "G-T7ELE7X6WX"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };