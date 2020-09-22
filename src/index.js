import React from 'react';
import {Provider} from 'react-redux';
import {ReactReduxFirebaseProvider} from 'react-redux-firebase'
import {createFirestoreInstance} from 'redux-firestore'
import firebase from 'firebase/app'
import {RootNavigation} from './navigation/RootNavigation'
import initializeFirebase from "./initializeFirebase";
import {reactReduxFirebaseConfig} from "./configs";
import Store from './redux/store'
import configureLocales from './resources/locales'

initializeFirebase()

const store = Store()

export default () => {

    configureLocales()

    return (
        <Provider store={store}>
            <ReactReduxFirebaseProvider
                firebase={firebase}
                config={reactReduxFirebaseConfig}
                dispatch={store.dispatch}
                createFirestoreInstance={createFirestoreInstance}>
                <RootNavigation/>
            </ReactReduxFirebaseProvider>
        </Provider>
    );
}