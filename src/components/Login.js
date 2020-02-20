import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default class Login extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.form}>
                    <Text style={styles.titulo}>Tela de Login</Text>
                    <TextInput style={styles.input} placeholder='Seu email'/>
                    <TextInput style={styles.input} placeholder='Sua senha'/>
                    <TouchableOpacity style={styles.button}>
                        <Text>Entrar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text>Cadastrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5D74E3',
        justifyContent: "center",
    },
    form: {
        backgroundColor:'#2d2d2d',
        padding: 16,
        borderRadius: 10,
        margin: 16,
        alignItems: 'center'
    },
    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white'
    },
    input: {
        marginTop:8,
        alignSelf: 'stretch',
        padding: 8,
        backgroundColor: 'white',
        fontSize: 16,
        borderRadius: 8
    },
    button: {
        alignSelf: 'stretch',
        alignItems: 'center',
        backgroundColor:'#51DB75',
        height: 42,
        marginTop: 16,
        padding: 8,
        borderRadius:8,
        borderColor: '#222',
        borderWidth: 2,
    }
})
