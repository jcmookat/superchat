import { useMemo } from 'react'
import '@fontsource/roboto'
import './App.css'
import useMediaQuery from '@mui/material/useMediaQuery'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

import { db, auth } from './firebase.config'

import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'

import SignIn from './components/SignIn'
import Chatroom from './components/ChatRoom'
import SignOut from './components/SignOut'

function App() {
	const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
	const theme = useMemo(
		() =>
			createTheme({
				palette: {
					mode: prefersDarkMode ? 'dark' : 'light',
				},
			}),
		[prefersDarkMode],
	)
	const [user] = useAuthState(auth)
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<div className='App'>
				<header>{user && <SignOut />}</header>
				<section>{user ? <Chatroom /> : <SignIn />}</section>
			</div>
		</ThemeProvider>
	)
}

export default App
