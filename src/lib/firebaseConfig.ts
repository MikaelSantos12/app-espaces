import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAAFtNFVJ9q04esoqKhJhzXjoxVzxLrMx0",
  authDomain: "app-espaces-teste.firebaseapp.com",
  projectId: "app-espaces-teste",
  storageBucket: "app-espaces-teste.appspot.com",
  messagingSenderId: "911758818923",
  appId: "1:911758818923:web:6c21cc86dd3cf3e9317b2e",
  measurementId: "G-C5NY7J1PY4",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
