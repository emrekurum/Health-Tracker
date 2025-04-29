// Şu anda compat mode kullanıyoruz baboli, o yüzden compat import yapacağız:

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'; // <<< bunu ekledik!

const firebaseConfig = {
 
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore(); // <<< Firestore'u export ettik!
