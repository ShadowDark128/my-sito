// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANutVz6MXhvt_wNo-PgluL1qGb--njAI4",
  authDomain: "biscotteria-i-nobili-acba7.firebaseapp.com",
  projectId: "biscotteria-i-nobili-acba7",
  storageBucket: "biscotteria-i-nobili-acba7.appspot.com",
  messagingSenderId: "702462509461",
  appId: "1:702462509461:web:043516bf5c614164bb769c",
  measurementId: "G-BZYWZN7KME"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);