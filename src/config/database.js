import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBivserF78qhDRlvxqqkphcU8DKy2np5S0",
    authDomain: "rpgcharacterhub.firebaseapp.com",
    databaseURL: "https://rpgcharacterhub.firebaseio.com",
    projectId: "rpgcharacterhub",
    storageBucket: "rpgcharacterhub.appspot.com",
    messagingSenderId: "844434405178"
}

firebase.initializeApp(config);

export const database = firebase.database();
export const firebaseAuth = firebase.auth;