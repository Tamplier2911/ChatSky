import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBOr1PHqTo7Jz85uu842WSXjPfTCvYt8n0",
  authDomain: "chatsky-92d8f.firebaseapp.com",
  databaseURL: "https://chatsky-92d8f.firebaseio.com",
  projectId: "chatsky-92d8f",
  storageBucket: "chatsky-92d8f.appspot.com",
  messagingSenderId: "659322414432",
  appId: "1:659322414432:web:bb8ea115cd097257d56a05",
  measurementId: "G-Y94DGMT1VY",
};

firebase.initializeApp(firebaseConfig);

export const saveUserToDB = async (createdUser) => {
  const { uid, email, photoURL, displayName } = createdUser;

  const usersRef = firebase.database().ref("users");

  await usersRef.child(uid).set({
    name: displayName,
    email: email,
    photo: photoURL,
  });
};

export const getCurrentUser = () => {
  // returning a promise
  return new Promise((resolve, reject) => {
    // subscribe for onAuthStateChange
    const unsubscribe = firebase.auth().onAuthStateChanged((userAuth) => {
      // get userAuth object and immediately unsubscribe
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;
