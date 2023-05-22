import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";

const app = firebase.initializeApp({
  apiKey: "AIzaSyDWB8GOnZTodEnWidPKFN3tN212wbGVYto",
  authDomain: "dumitru-malic.firebaseapp.com",
  databaseURL: "https://dumitru-malic-default-rtdb.firebaseio.com",
  projectId: "dumitru-malic",
  storageBucket: "dumitru-malic.appspot.com",
  messagingSenderId: "105989324230",
  appId: "1:105989324230:web:33bba09bd6769c86e786c7",
  measurementId: "G-2BFFX5HMLT"
});

export default app;

