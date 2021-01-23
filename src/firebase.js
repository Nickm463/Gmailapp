import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCWIJwA4cl334vnhYS5y3RWVltrN3isyl8",
    authDomain: "clone-e677c.firebaseapp.com",
    projectId: "clone-e677c",
    storageBucket: "clone-e677c.appspot.com",
    messagingSenderId: "727534603349",
    appId: "1:727534603349:web:47ff3d1b3d7a88c72718dc",
    measurementId: "G-E7M1SJ8MLR"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  export {db,auth,provider};