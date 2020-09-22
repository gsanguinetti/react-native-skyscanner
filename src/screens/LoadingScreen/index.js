import React, {useEffect} from 'react';
import {Spinner, Container, Content, Grid} from "native-base";
import {ActivityIndicator} from 'react-native'

import { LOGIN_SCREEN } from "../../navigation/RootNavigation";

import styles from './style'

export default function Loading({navigation}) {

    useEffect(() => {
        //navigation.navigate(LOGIN_SCREEN)
    })

    return (
        <Content contentContainerStyle={styles.content}>
            <Grid style={styles.grid}>
                <ActivityIndicator size="large" color="red"/>
            </Grid>
        </Content>
    );
}