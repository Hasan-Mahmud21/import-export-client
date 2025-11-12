// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkQycZprGicIlgsazNxQShhCBsxT_hcwM",
  authDomain: "tradesphere-d6f04.firebaseapp.com",
  projectId: "tradesphere-d6f04",
  storageBucket: "tradesphere-d6f04.firebasestorage.app",
  messagingSenderId: "622170842069",
  appId: "1:622170842069:web:e4520370b6db8b7367935c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
