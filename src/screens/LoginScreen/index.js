import React from 'react';
import {Content} from "native-base";
import {Text} from 'react-native'
import i18n from 'i18n-js';

import styles from './style'


export default function Login() {
    return (
        <Content contentContainerStyle={styles.content}>
            <Text>{i18n.t('loginTitle')}</Text>
        </Content>
    );
}