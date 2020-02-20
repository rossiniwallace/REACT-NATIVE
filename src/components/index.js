import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {createStackNavigation} from '@react-navigation/stack';
import {createAppContainer} from '@react-navigation/native';
import Login from './Login'

const MainNavigation = createStackNavigation({
    Login: {
        screen:Login,
        navigationOptions: {
            headerShow: false
        }
    }
})

