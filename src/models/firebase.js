import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import "dotenv/config.js";

const firebaseConfig = {
    apiKey: "AIzaSyC9fw32uQYPUZm3fm8_uRN6u6pot7BA2YY",
    authDomain: "jvetoolsapi.firebaseapp.com",
    projectId: "jvetoolsapi",
    storageBucket: "jvetoolsapi.firebasestorage.app",
    messagingSenderId: "445992654830",
    appId: "1:445992654830:web:c3a4814a336c2dc05760ff"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
