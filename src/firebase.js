import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB6-EcXQQkB_Z5-CgsGq5vYLQNAyDHpRcE",
    authDomain: "vue-crud-1-3fb48.firebaseapp.com",
    databaseURL: "https://vue-crud-1-3fb48.firebaseio.com",
    projectId: "vue-crud-1-3fb48",
    storageBucket: "vue-crud-1-3fb48.appspot.com",
    messagingSenderId: "80998405132",
    appId: "1:80998405132:web:d491b647640fde2dd1ca29"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()

export {db}