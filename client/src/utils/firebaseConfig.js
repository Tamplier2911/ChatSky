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

export const createChannelInDB = async (channelData) => {
  // destructure required values from channel data object
  const { createdBy, name, desc } = channelData;

  // get channels collection ref
  const channelsRef = firebase.database().ref("channels");

  // key
  const key = channelsRef.push().key;

  // create channel object
  const newChannel = {
    id: key,
    name: name,
    description: desc,
    createdBy: createdBy,
  };

  // write new document into channels collection
  await channelsRef.child(key).update(newChannel);
};

export const loadAllChannelsFromDB = async () => {
  // define collection to store results
  const data = [];

  // get channels collection ref
  const channelsRef = firebase.database().ref("channels");

  // promisify on child_added - return fulfilled data
  return new Promise((resolve, rejsect) => {
    channelsRef.on("child_added", (snap) => {
      data.push(snap.val());
      resolve(data);
    });
  });
};

export const saveUserToDB = async (createdUser) => {
  // desctructure required values from user object
  const { uid, email, photoURL, displayName } = createdUser;

  // get user collection ref
  const usersRef = firebase.database().ref("users");

  // write document into user collection
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
