import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAKSNNU7f9vntTMJ420mM3PYugVuk341Ag",
  authDomain: "in-agri.firebaseapp.com",
  projectId: "in-agri",


  storageBucket: "in-agri.appspot.com",
  messagingSenderId: "945913508820",
  appId: "1:945913508820:web:7469fc1c9ff278f0479c41",
  measurementId: "G-B2PTZNCF0R"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };