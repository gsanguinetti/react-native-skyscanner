import firebase from 'firebase/app'
import { firebaseConfig } from "./configs";

export default function initializeFirebase() {

    // Initialize Firebase instance
    firebase.initializeApp(firebaseConfig)
}
