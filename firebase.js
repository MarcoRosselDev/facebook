// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvVZY9NYLjFi3ZOI8uKK-O1xxgg9a1rPQ",
  authDomain: "facebookclone-2c49b.firebaseapp.com",
  projectId: "facebookclone-2c49b",
  storageBucket: "facebookclone-2c49b.appspot.com",
  messagingSenderId: "733983506005",
  appId: "1:733983506005:web:564148fb211f3c61671edc",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
