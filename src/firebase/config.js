import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: "AIzaSyApSK5VswzzsRkCqUaAEjX2inq31zkq-DM",
    authDomain: "mymoney-9f591.firebaseapp.com",
    projectId: "mymoney-9f591",
    storageBucket: "mymoney-9f591.appspot.com",
    messagingSenderId: "812866642607",
    appId: "1:812866642607:web:f900d18f71fe608a18aa5a"
  };

// init firebase

firebase.initializeApp(firebaseConfig)

// init service

const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }