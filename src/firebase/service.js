import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FB_APIKEY,
  authDomain: import.meta.env.VITE_FB_AUTHDOMAIN,
  projectId: "ecommerce-1000",
  storageBucket: "ecommerce-1000.appspot.com",
  messagingSenderId: import.meta.env.VITE_FB_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_FB_APIID,
  measurementId: import.meta.env.VITE_FB_MEASUREMENTID
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// databse
export const firebaseDB = getFirestore(firebaseApp);

// authentication
export const firebaseAuth = getAuth(firebaseApp);
