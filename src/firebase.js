import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBYWIs_OyDopjCQ_fjNZtR_kD415ASjsoM",
  authDomain: "usprogramme-a9574.firebaseapp.com",
  databaseURL: "https://usprogramme-a9574.firebaseio.com",
  projectId: "usprogramme-a9574",
  storageBucket: "usprogramme-a9574.appspot.com",
  messagingSenderId: "903196061753",
  appId: "1:903196061753:web:cad0644a5dbd7768739de8",
  measurementId: "G-JHQFDWE9ZB"
};

  firebase.initializeApp(firebaseConfig);

  export const firestore = firebase.firestore();

  export default firebase;