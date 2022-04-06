// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyBdCnUylBfiB2FheZe_Ugqeqq9RTM4phUE',
	authDomain: 'superchat-54dc1.firebaseapp.com',
	projectId: 'superchat-54dc1',
	storageBucket: 'superchat-54dc1.appspot.com',
	messagingSenderId: '798841095699',
	appId: '1:798841095699:web:ba2fb2cb4082fc8c73a1e6',
}

// Initialize Firebase
initializeApp(firebaseConfig)

const auth = getAuth()

const db = getFirestore()

export { auth, db }
