import firebase from "firebase";


const firebaseConfig = ({
  apiKey: "AIzaSyDCaujZt6Xp-a2g0XTu6qX_5HISfYted8w",
  authDomain: "clone-d24eb.firebaseapp.com",
  databaseURL: "https://clone-d24eb.firebaseio.com",
  projectId: "clone-d24eb",
  storageBucket: "clone-d24eb.appspot.com",
  messagingSenderId: "817587801441",
  appId: "1:817587801441:web:5becd513e7610a6f4c4920",
  measurementId: "G-J1J6HY1C84",
});

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore()
const auth = firebase.auth();


export { db, auth };