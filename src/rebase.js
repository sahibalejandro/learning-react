import Rebase from 're-base';
import firebase from 'firebase';

firebase.initializeApp({
    apiKey: "AIzaSyCdl0jlchcoWADj2wtoMswRMJFzC5zpnC8",
    authDomain: "catch-of-the-day-923ad.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-923ad.firebaseio.com",
    projectId: "catch-of-the-day-923ad",
    storageBucket: "",
    messagingSenderId: "116152192448"
});

export default Rebase.createClass(firebase.database());
