
// Firebase
export const firebaseConfig = {
    apiKey: "AIzaSyC6e1n-kQEP68w69Wp6hRdH3rwkQSSQT_c",
    authDomain: "react-native-test-a2b9b.firebaseapp.com",
    databaseURL: "https://react-native-test-a2b9b.firebaseio.com",
    projectId: "react-native-test-a2b9b",
    storageBucket: "react-native-test-a2b9b.appspot.com",
    messagingSenderId: "644189758178",
    appId: "1:644189758178:web:f14a76dec3781cc18ef4bb",
    measurementId: "G-EJB54374YY"
};


export const reactReduxFirebaseConfig = {
    userProfile: 'users', // root that user profiles are written to
    updateProfileOnLogin: false, // enable/disable updating of profile on login
    presence: 'presence', // list currently online users under "presence" path in RTDB
    sessions: 'sessions', // list sessions
    useFirestoreForProfile: true, // Save profile to Firestore instead of Real Time Database
    useFirestoreForStorageMeta: true, // Metadata associated with storage file uploads goes to Firestore
}