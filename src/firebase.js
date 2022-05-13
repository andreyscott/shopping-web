// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyC73A2kTIvDOBTVqm0uyMzhUXoHb2kVNgg",
    authDomain: "andreyshopweb.firebaseapp.com",
    projectId: "andreyshopweb",
    storageBucket: "andreyshopweb.appspot.com",
    messagingSenderId: "221199588184",
    appId: "1:221199588184:web:2344d90060680b36f7e32d",
    measurementId: "G-4WJTXEQFBM"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
