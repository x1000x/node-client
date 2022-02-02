import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDldK4VMIsqblbaDL8iZWp3R3GrCMdKohs",
  authDomain: "node-ecommerce-nov-4b0af.firebaseapp.com",
  projectId: "node-ecommerce-nov-4b0af",
  storageBucket: "node-ecommerce-nov-4b0af.appspot.com",
  messagingSenderId: "1046121158902",
  appId: "1:1046121158902:web:8b811ffced566ad33074d7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


