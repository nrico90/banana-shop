import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCfGQU_m2luKmteMXEwFvhZ5f7sMws4i1w",
  authDomain: "banana-shop-db.firebaseapp.com",
  databaseURL: "https://banana-shop-db.firebaseio.com",
  projectId: "banana-shop-db",
  storageBucket: "banana-shop-db.appspot.com",
  messagingSenderId: "401247033474",
  appId: "1:401247033474:web:f884e85334316a06a3fc9b",
  measurementId: "G-QG8DX3RVV2",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: " select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
