import { TextField, AppBar, IconButton } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import { db, auth } from '../firebase.config'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { useState } from 'react'
import { toast } from 'react-toastify'

function SendMessage({ scroll }) {
	const [message, setMessage] = useState('')
	const sendMessage = async (e) => {
		try {
			e.preventDefault()
			const { uid, photoURL } = auth.currentUser
			const docRef = await addDoc(collection(db, 'messages'), {
				text: message,
				photoURL,
				uid,
				createdAt: serverTimestamp(),
			})
			setMessage('')
			scroll.current.scrollIntoView({ behavior: 'smooth' })
		} catch (error) {
			toast.error(`Can't Send Message!`)
		}
	}
	return (
		<>
			<AppBar position='fixed' sx={{ top: 'auto', bottom: 0 }}>
				<form onSubmit={sendMessage} className='form'>
					<div className='textfield'>
						<TextField
							fullWidth
							id='filled-basic'
							label='Message...'
							variant='filled'
							value={message}
							onChange={(e) => setMessage(e.target.value)}
						/>
					</div>
					<div className='send'>
						<IconButton
							aria-label='delete'
							type='submit'
							size='large'
							color='primary'
							disabled={!message}>
							<SendIcon />
						</IconButton>
					</div>
				</form>
			</AppBar>
		</>
	)
}
export default SendMessage
