import { doRequest } from './doRequest'
import { AsyncStorage } from 'react-native'

const SESSION_KEY = '@brabank:session'

const setSession = (usuario) => {
	AsyncStorage.setItem(SESSION_KEY, JSON.stringify(usuario))
}

export const cadastrar = async (usuario) => {

	const response = await doRequest('registrar/', 'POST', usuario)

	if(response.ok){
		const usuario = await response.json()
		setSession(usuario)
	}

	return response

}

export const signIn = async (usuario) => {

	const response = await doRequest('autenticar/', 'POST', usuario)

	if (response.ok) {
		const usuario = await response.json()
		setSession(usuario)
	}

	return response

}

export const isSignedIn = async () => {

	const session = await AsyncStorage.getItem(SESSION_KEY)

	return JSON.parse(session)

}

export const signOut = () => {
	
	AsyncStorage.removeItem(SESSION_KEY)

}