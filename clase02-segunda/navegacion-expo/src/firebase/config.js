import app from 'firebase/app';
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCDqjApfcRKPz3KmauHUzpInD1KD833lz8",
  authDomain: "demofirebase-53046.firebaseapp.com",
  projectId: "demofirebase-53046",
  storageBucket: "demofirebase-53046.firebasestorage.app",
  messagingSenderId: "239284292016",
  appId: "1:239284292016:web:cb2c6e9423a3681dffae75"
};

app.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = app.firestore();
