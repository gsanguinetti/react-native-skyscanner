import React from 'react';
import {Content, Grid, Button, Text, Container} from "native-base";
import i18n from 'i18n-js';

import styles from './style'

export default function Login() {
    return (
        <Content contentContainerStyle={styles.content}>
            <Grid style={styles.grid}>
                <Text>{i18n.t('loginTitle')}</Text>
                <Text>{i18n.t('loginMsg')}</Text>
                <Button style={styles.button} light>
                    <Text>{i18n.t('loginButton')}</Text>
                </Button>
            </Grid>
        </Content>
    );
}