import { useMemo } from 'react'
import '@fontsource/roboto'
import './App.css'
import useMediaQuery from '@mui/material/useMediaQuery'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

import { auth } from './firebase.config'

import { useAuthState } from 'react-firebase-hooks/auth'

import SignIn from './components/SignIn'
import Chatroom from './components/ChatRoom'

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
				<section>{user ? <Chatroom /> : <SignIn />}</section>
			</div>
		</ThemeProvider>
	)
}

export default App
