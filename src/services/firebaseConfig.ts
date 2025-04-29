// Şu anda compat mode kullanıyoruz baboli, o yüzden compat import yapacağız:

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'; // <<< bunu ekledik!

const firebaseConfig = {
  apiKey: "AIzaSyDKz2zily4K26rS9-DlKEzjxIAKmFdlOOg",
  authDomain: "saglik-takip-56672.firebaseapp.com",
  projectId: "saglik-takip-56672",
  storageBucket: "saglik-takip-56672.appspot.com",
  messagingSenderId: "644480381189",
  appId: "1:644480381189:web:8730dd5062277ae010c76c",
  measurementId: "G-LC4ZPBH34Q"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore(); // <<< Firestore'u export ettik!
