// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, set, ref, onValue } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBNQt5d2TJUxfbCvG0TmML_h53z-o9t1CQ",
  authDomain: "confess-note-aaaf5.firebaseapp.com",
  databaseURL:
    "https://confess-note-aaaf5-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "confess-note-aaaf5",
  storageBucket: "confess-note-aaaf5.appspot.com",
  messagingSenderId: "121077521378",
  appId: "1:121077521378:web:33bb0768aab0b2b46d77bb",
  measurementId: "G-4GNC4HF4LF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Get a reference to the database service
const database = getDatabase(app);

export { database, set, ref, onValue };
