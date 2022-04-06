import LogoutIcon from '@mui/icons-material/Logout'
import Button from '@mui/material/Button'
import { auth } from '../firebase.config'
function SignOut() {
	const onLogout = () => {
		auth.signOut()
	}
	return (
		<Button
			onClick={onLogout}
			variant='outlined'
			size='large'
			endIcon={<LogoutIcon />}>
			Sign Out
		</Button>
	)
}
export default SignOut
