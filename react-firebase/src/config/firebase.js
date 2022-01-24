import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, update, onValue } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyArgd9HGreijd-NqIs9cmAtLSufDnWG2zY",
  authDomain: "test-project-bc582.firebaseapp.com",
  databaseURL:
    "https://test-project-bc582-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "test-project-bc582",
  storageBucket: "test-project-bc582.appspot.com",
  messagingSenderId: "535797383215",
  appId: "1:535797383215:web:9b8c2bc14f577e57bdc6da",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, ref, set, update, onValue };
