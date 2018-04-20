import * as firebase from "firebase";

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyAYtRGPlsRRFZs5y4B_LJwD40Ep7N7DYm0",
    authDomain: "musicapp-bb3a9.firebaseapp.com",
    databaseURL: "https://musicapp-bb3a9.firebaseio.com",
    projectId: "musicapp-bb3a9",
    storageBucket: "musicapp-bb3a9.appspot.com",
    messagingSenderId: "1034943811232"
  };


export default firebase.initializeApp(config);
