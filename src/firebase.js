// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBcQbrjiNBJ9Av_rZy_5-BzHIsU5U9jKyc",
  authDomain: "weddinginvitation-811ac.firebaseapp.com",
  projectId: "weddinginvitation-811ac",
  storageBucket: "weddinginvitation-811ac.appspot.com",
  messagingSenderId: "199959360785",
  appId: "1:199959360785:web:5cf93f70bde580e40b88b0",
  measurementId: "G-BERWWVXMSY"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };