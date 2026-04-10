const firebaseConfig = {
  apiKey: "AIzaSyDycz2vPRk1PXSfBxwQsA4wq53x3VzPZ70",
  authDomain: "gate-exam-interface.firebaseapp.com",
  projectId: "gate-exam-interface",
  storageBucket: "gate-exam-interface.firebasestorage.app",
  messagingSenderId: "33135469964",
  appId: "1:33135469964:web:d523a7d6af60c34832a2a9",
  measurementId: "G-TGGBC8NQMX"
};

firebase.initializeApp(firebaseConfig);

window.auth = firebase.auth();
window.db = firebase.firestore();
window.provider = new firebase.auth.GoogleAuthProvider();

window.configReady = true;
