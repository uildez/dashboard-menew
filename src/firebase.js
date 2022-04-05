import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCiYTXkGIdKViVYwkLFxf5LAOpr0RDuoew",
    authDomain: "menew-aplication.firebaseapp.com",
    projectId: "menew-aplication",
    storageBucket: "menew-aplication.appspot.com",
    messagingSenderId: "624288815169",
    appId: "1:624288815169:web:274d4470bffaa9e1ec0ec0",
    measurementId: "G-YEM39KDJX1"
  };
  
  // Initialize Firebase
  const firebaseapp = firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  export { auth };