import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, TextComponent } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { isSignedIn, signIn } from '../servers/auth-service'

export default class Login extends Component {
    constructor() {
		super()
		this.state = {
			email: '',
			senha: ''
		}
	}

	componentDidMount = async () => {
		// const session = await isSignedIn()
		// if(session)
		// 	this.props.navigation.replace('Home')
	}

	entrar = async e => {
		if(!this.validar()) return

		const usuario = this.state

		const response = await signIn(usuario)

		if(response.ok)
			this.props.navigation.replace('Home')
	}

	cadastrar = e => {
		this.props.navigation.navigate('Cadastro')
	}

	validar = () => {
		const {email, senha} = this.state
		if(!email || !senha){
			Alert.alert('Ops...', 'Todos os campos são obrigatórios')
			return false
		}
		return true	
	}


    render() {
        return (

            <LinearGradient
                colors={["#00e676", "#009688"]}
                style={{ flex: 1 }}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}>
                <View style={styles.container}>
                    <View style={styles.form}>
                        <TextInput
                            style={styles.input}
                            placeholder="Seu e-mail"
                            onChangeText={texto => this.setState({ email: texto })} />
                        <TextInput
                            style={styles.input}
                            placeholder="Sua senha"
                            onChangeText={texto => this.setState({ senha: texto })} />
                        <TouchableOpacity style={styles.button}
                            onPress={this.entrar}>
                            <Text>Entrar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}
                            onPress={this.cadastrar}>
                            <Text>Cadastrar-se</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </LinearGradient>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },
    form: {
        // backgroundColor: '#2d2d2d',
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
        marginTop: 8,
        alignSelf: 'stretch',
        padding: 8,
        backgroundColor: 'white',
        fontSize: 16,
        borderRadius: 8,
        borderWidth: 2
    },
    button: {
        alignSelf: 'stretch',
        alignItems: 'center',
        backgroundColor: '#51DB75',
        height: 42,
        marginTop: 16,
        padding: 8,
        borderRadius: 8,
        borderWidth: 2
    }
})
