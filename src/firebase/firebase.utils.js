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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: " select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
