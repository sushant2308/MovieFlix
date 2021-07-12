import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCekEdgutvRiXLKtmPTMab32vePYd5b2CI",
    authDomain: "movieflix-fa1ea.firebaseapp.com",
    projectId: "movieflix-fa1ea",
    storageBucket: "movieflix-fa1ea.appspot.com",
    messagingSenderId: "796591017681",
    appId: "1:796591017681:web:0965a0e1870c46f2d3fff0"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db= firebaseApp.firestore()
  const auth =firebaseApp.auth()

  export {auth};
  export default db;