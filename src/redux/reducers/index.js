import { combineReducers } from "redux";
import firebase from 'react-redux-firebase/lib/reducer'
import firestore from 'redux-firestore/lib/reducer'

export default combineReducers({
    firestore,
    firebase,
    sampleReducer: () => {
        return {};
    }
})
