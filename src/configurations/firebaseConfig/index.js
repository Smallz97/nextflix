// Importing the required functions from their respective firebase SDK'S
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

// Firebase configuration for this application
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGE_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

// Initializing Firebase within the application
const app = initializeApp(firebaseConfig);

// Initializing Firebase Authentication and getting a reference to the service
const auth = getAuth();

// Initializing Firebase Analytics and getting a reference to the service
const analytics = getAnalytics(app);

export {
  auth,
  analytics,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
};
