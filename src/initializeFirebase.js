import firebase from 'firebase/app'
import { firebaseConfig } from "./configs";
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'
import 'firebase/performance'

export default function initializeFirebase() {

    // Initialize Firebase instance
    firebase.initializeApp(firebaseConfig)
}
