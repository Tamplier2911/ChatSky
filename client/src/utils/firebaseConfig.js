import { v4 as uuidv4 } from "uuid";
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

/**
 *
 * @fileoverview
 * MESSAGE ACTIONS
 *
 */

export const createMessageInDB = async (messageDataObject) => {
  // destructure required values from message data object
  const {
    user,
    channel: { id },
    messageContent,
  } = messageDataObject;

  if (messageContent.media) {
    // get file
    const file = messageContent.media;
    // get hash for filename
    const hash = uuidv4();
    // get full filepath
    const filePath = `chat/public/${hash}.jpg`;

    // get storage reference
    const storageRef = firebase.storage().ref();

    // uploading the image to storage
    // optionally can be store in uploadTaskSnapshot to track download %
    await storageRef.child(filePath).put(file);

    // get url where image can be referenced from
    const url = await storageRef.child(filePath).getDownloadURL();

    // set url of the image to message content media
    messageContent.media = url;
  }

  // get messages collection reference
  const messagesRef = firebase.database().ref("messages");

  // create message object
  const newMessage = {
    user,
    messageContent,
    timestamp: firebase.database.ServerValue.TIMESTAMP,
  };

  // provide child to messages collection
  // (key property, which we can find messages by - essential channel id) amd push it to DB
  // then set new message object
  await messagesRef.child(id).push().set(newMessage);

  // End result structure:
  /*
  channelID
      messageID
          messageContent {
             content,
             media
          }
          timestamp 1588940746593
          user {
              id
              displayname
              avatar
          }
  */
};

export const loadAllMessagesFromDB = async (channelId) => {
  // define collection to store results
  const data = [];

  // get messages collection ref
  const messagesRef = firebase.database().ref("messages");

  // promisify on child_added - return fulfilled data
  // get access to message child by channelId
  return new Promise((resolve, reject) => {
    messagesRef.child(channelId).on(
      "child_added",
      (snap) => {
        data.push(snap.val());
        resolve(data);
      },
      reject
    );
  });
};

/**
 *
 * @fileoverview
 * CHANNEL ACTIONS
 *
 */

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

  // get messages collection reference
  const messagesRef = firebase.database().ref("messages");

  // create message object
  const newMessage = {
    user: createdBy,
    messageContent: {
      content: "Chat successfully created!",
    },
    timestamp: firebase.database.ServerValue.TIMESTAMP,
  };

  // provide child to messages collection
  // (key property, which we can find messages by - essential channel id) amd push it to DB
  // then set new message object
  await messagesRef.child(key).push().set(newMessage);
};

export const loadAllChannelsFromDB = async () => {
  // define collection to store results
  const data = [];

  // get channels collection ref
  const channelsRef = firebase.database().ref("channels");

  // promisify on child_added - return fulfilled data
  return new Promise((resolve, reject) => {
    channelsRef.on(
      "child_added",
      (snap) => {
        data.push(snap.val());
        resolve(data);
      },
      reject
    );
  });
};

/**
 *
 * @fileoverview
 * USER ACTIONS
 *
 */

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
