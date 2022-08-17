import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyAPMza0xhYQuoeHfgpZRiJI6HT0ywvxYDc",
    authDomain: "c-71-project-cb89d.firebaseapp.com",
    projectId: "c-71-project-cb89d",
    storageBucket: "c-71-project-cb89d.appspot.com",
    messagingSenderId: "334368767046",
    appId: "1:334368767046:web:f872805bce82673a841e47"
  };

//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
