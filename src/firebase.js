// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA1-jYap9qaqO6DxUt6pyFDcZQiooFb4jg",
    authDomain: "clone-f1454.firebaseapp.com",
    projectId: "clone-f1454",
    storageBucket: "clone-f1454.appspot.com",
    messagingSenderId: "70910768229",
    appId: "1:70910768229:web:c96507c3174b30aadd828c",
    measurementId: "G-K15ZEFTDNP"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };