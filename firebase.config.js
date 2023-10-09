// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBc3MD8yEP61IZSNsZCZLt1UrCbJp2MPJE",
  authDomain: "event-managment-9324d.firebaseapp.com",
  projectId: "event-managment-9324d",
  storageBucket: "event-managment-9324d.appspot.com",
  messagingSenderId: "557739278545",
  appId: "1:557739278545:web:b759e4866399a64ac5c5f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth
