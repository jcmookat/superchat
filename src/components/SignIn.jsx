import { Box, Button, Typography } from '@mui/material'
import LoginIcon from '@mui/icons-material/Login'
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { auth } from '../firebase.config'
import { toast } from 'react-toastify'
import googleIcon from '../assets/svg/googleIcon.svg'
import superchat from '../assets/images/superchat.png'

function SignIn() {
	const signInWithGoogle = async () => {
		try {
			const provider = new GoogleAuthProvider()
			const result = await signInWithPopup(auth, provider)
			// const user = result.user
		} catch (error) {
			toast.error('Could not authorize with Google')
		}
	}
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				height: '100vh',
				alignItems: 'center',
			}}>
			<div>
				<Typography align='center'>
					<img
						src={superchat}
						style={{ width: '96px', marginBottom: '15px' }}
						alt='SuperChat'
					/>
				</Typography>
				<label htmlFor='icon-button-file'>
					<Button
						onClick={signInWithGoogle}
						variant='contained'
						size='large'
						startIcon={<LoginIcon />}>
						Sign in with
						<img
							src={googleIcon}
							style={{ width: '17px', marginLeft: '.75rem' }}
							alt='Google'
						/>
					</Button>
				</label>
			</div>
		</div>
	)
}
export default SignIn
