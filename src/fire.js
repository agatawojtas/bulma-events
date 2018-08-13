import firebase from "firebase";
console.log(firebase);

const config = {
    apiKey: "AIzaSyCLOukeBBNHumlZj3rImpH3OfX1lYlRSOM",
    authDomain: "bulma-events.firebaseapp.com",
    databaseURL: "https://bulma-events.firebaseio.com",
    projectId: "bulma-events",
    storageBucket: "bulma-events.appspot.com",
    messagingSenderId: "511855960585"
};
firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
