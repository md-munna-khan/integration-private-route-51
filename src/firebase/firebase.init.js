// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLR_pPey_QqqmpQMjEp_dbGKojn2bTxiU",
  authDomain: "integration-private-route-prac.firebaseapp.com",
  projectId: "integration-private-route-prac",
  storageBucket: "integration-private-route-prac.firebasestorage.app",
  messagingSenderId: "494798149416",
  appId: "1:494798149416:web:6a2b8e3ee3815990da621d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);