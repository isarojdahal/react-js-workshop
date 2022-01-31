// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, set, ref, onValue } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDnyNAA17kLT07Hi2xnHLRYI4ybc9MFRmY",
  authDomain: "confess-note-3bb02.firebaseapp.com",
  databaseURL:
    "https://confess-note-3bb02-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "confess-note-3bb02",
  storageBucket: "confess-note-3bb02.appspot.com",
  messagingSenderId: "921782042892",
  appId: "1:921782042892:web:5987078bc4cf2495258929",
  measurementId: "G-BGL5WG61QF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Get a reference to the database service
const database = getDatabase(app);

export { database, set, ref, onValue };
