import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyDEl5vlR64Hzv37vjElrlssP_cH6_8RaSQ",
    authDomain: "netflix-8c077.firebaseapp.com",
    projectId: "netflix-8c077",
    storageBucket: "netflix-8c077.appspot.com",
    messagingSenderId: "883325681477",
    appId: "1:883325681477:web:f3a493f9caf1b8ac2c082c"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth}
export default db;