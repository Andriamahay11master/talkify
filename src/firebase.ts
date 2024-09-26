// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuTo4BlTbC6GSuIydu0dH0gLZRL_ytKrM",
  authDomain: "talkify-eb4fa.firebaseapp.com",
  projectId: "talkify-eb4fa",
  storageBucket: "talkify-eb4fa.appspot.com",
  messagingSenderId: "1072267959862",
  appId: "1:1072267959862:web:1e95362207541ced534297",
  measurementId: "G-821P9KX3JS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export {app, auth, analytics}