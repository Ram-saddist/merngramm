import firebase from 'firebase/app'
import 'firebase/storage';

var firebaseConfig = {
    apiKey: "AIzaSyCoeDWO8NVZNHoB3N_zwjCCkCbXmSaxG50",
    authDomain: "merngram-29c45.firebaseapp.com",
    projectId: "merngram-29c45",
    storageBucket: "merngram-29c45.appspot.com",
    messagingSenderId: "321069980753",
    appId: "1:321069980753:web:8a804b5000f5def84c2c70"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();

export {projectStorage};