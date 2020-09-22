import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '../../screens/LoginScreen'
import HomeScreen from '../../screens/HomeScreen'
import LoadingScreen from '../../screens/LoadingScreen'
import ProfileScreen from '../../screens/ProfileScreen'
import ResultsScreen from '../../screens/ResultsScreen'

const Stack = createStackNavigator();

export const LOADING_SCREEN = 'LoadingScreen';
export const LOGIN_SCREEN = 'LoginScreen';
export const HOME_SCREEN = 'HomeScreen';
export const PROFILE_SCREEN = 'ProfileScreen';
export const RESULTS_SCREEN = 'ResultsScreen';

export const RootNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={LOADING_SCREEN} component={LoadingScreen}/>

                <Stack.Screen name={LOGIN_SCREEN} component={LoginScreen} options={{
                    headerShown: false
                }}/>

                <Stack.Screen name={HOME_SCREEN} component={HomeScreen}/>

                <Stack.Screen name={PROFILE_SCREEN} component={ProfileScreen}/>

                <Stack.Screen name={RESULTS_SCREEN} component={ResultsScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}