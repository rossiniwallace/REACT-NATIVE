import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, AsyncStorage } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { isSignedIn } from '../servers/auth-service'

const Lancamento = (props) => {
	const lanc = props.lancamento
	return (
		<View style={styles.viewLancamento}>
			<Text>{lanc.tipo === 'R' ? 'Receita' : 'Despesa'}</Text>
			<Text>{lanc.descricao}</Text> 
			<Text style={{fontSize: 16}}>{lanc.valor}</Text> 
		</View>
	)
}

export default class Home extends Component {
	constructor(){
		super()
		this.state = {
			session: {},
			lancamentos: []
		}
	}

	componentDidMount = async () => {
		const session = await isSignedIn()
		this.setState({session: session})

		const params = {
			method: 'GET',
			headers: {
				'Content-type': 'application/json',
				Authorization: 'Bearer ' + session.token
			}
		}
		const response = 
			await fetch('http://10.107.144.32:3000/lancamentos',params)
		
		if(!response.ok)
			return console.log('erro ao buscar lancamentos')
		
		const lancamentos = await response.json()

		this.setState({lancamentos})

	}
    
    
    render() {
        const {session} = this.state
        const usuario = session.usuario ? session.usuario : ''
        const lancamento = {
			descricao: 'Teste de lancamento'
		}
        return (
            <LinearGradient
                colors={["#00e676", "#009688"]}
                style={{ flex: 1 }}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}>
                <View style={styles.container}>
                    <Text>
                        Bem vindo a Home {usuario.nome}
                    </Text>
                    <Text style={styles.titulo}>Meus Lancamentos</Text>
				{
					this.state.lancamentos.map(lanc => {
						return (
							<Lancamento key={lanc.id} lancamento={lanc}/>
						)
					})
				}
                </View>
            </LinearGradient>
        );
    }
}

const styles = StyleSheet.create({
    container: {
		flex: 1,
		paddingTop: 25,
		padding: 6
	},
	titulo: {
		fontSize: 30,
		color: '#fff'
	},
	viewLancamento: {
		height: 70,
		backgroundColor: '#fff',
		padding: 6,
		margin: 6
	}
})
