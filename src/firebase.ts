// Import the functions you need from the SDKs you need
import { getAnalytics, logEvent } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUodE7Pnm_KWlynpP63z8MeArePhXd0TI",
  authDomain: "irregular-verbs-966f7.firebaseapp.com",
  databaseURL: "https://irregular-verbs-966f7.firebaseio.com",
  projectId: "irregular-verbs-966f7",
  storageBucket: "irregular-verbs-966f7.appspot.com",
  messagingSenderId: "212385442396",
  appId: "1:212385442396:web:77eabc2a6707abe01f5499",
  measurementId: "G-WLNM6SXCXE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
logEvent(analytics, "notification_received");
