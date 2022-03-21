import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCA2q3ocHB2E4IWwHbDjoRGAovKsMbc0M8",
  authDomain: "movie-recommendation-35eda.firebaseapp.com",
  projectId: "movie-recommendation-35eda",
  storageBucket: "movie-recommendation-35eda.appspot.com",
  messagingSenderId: "398113020752",
  appId: "1:398113020752:web:9b8b6065249abe541aea55",
  measurementId: "G-7TBXPVR4VG",
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export { db };
