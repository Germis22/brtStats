import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAJTsReIvIzGffkZUdVXy4qHqQunYa3PxI",
    authDomain: "brttracker-bdb50.firebaseapp.com",
    databaseURL: "https://brttracker-bdb50.firebaseio.com",
    projectId: "brttracker-bdb50",
    storageBucket: "brttracker-bdb50.appspot.com",
    messagingSenderId: "473595464273",
    appId: "1:473595464273:web:cb7158467ad86532710670",
    measurementId: "G-D2WFM1SQNK"
  };

const fire = firebase.initializeApp(firebaseConfig);
export default fire;