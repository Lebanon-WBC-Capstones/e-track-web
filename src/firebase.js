import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD9Bw3t8EPa0K8s98_vZCo0bQR60ZCUyS0',
  authDomain: 'e-track-fa307.firebaseapp.com',
  projectId: 'e-track-fa307',
  storageBucket: 'e-track-fa307.appspot.com',
  messagingSenderId: '829126667351',
  appId: '1:829126667351:web:67348e4a1038a654310712',
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};
