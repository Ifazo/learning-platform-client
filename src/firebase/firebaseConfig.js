import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD9j1KavWpspmQU-q1Vwc8whn35RDjSHvA",
  authDomain: "learning-platform-server-side.firebaseapp.com",
  projectId: "learning-platform-server-side",
  storageBucket: "learning-platform-server-side.appspot.com",
  messagingSenderId: "220221505149",
  appId: "1:220221505149:web:812f2ae0c96ee6ec233b14"
};

const app = initializeApp(firebaseConfig);
export default app;