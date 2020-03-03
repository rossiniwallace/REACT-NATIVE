import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createAppContainer, NavigationContainer } from '@react-navigation/native';
import Login from './Login'
import Cadastro from './Cadastro'
import Home from './Home'

const Stack = createStackNavigator()

export default function MyStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="Cadastro"
                    component={Cadastro}
                    options={{ title: 'Faça seu cadastro' }}
                />
                
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

