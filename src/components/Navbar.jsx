import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import SignOut from './SignOut'
import superchat from '../assets/images/superchat.png'
function Navbar() {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position='fixed'>
				<Toolbar>
					<Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
						<img
							src={superchat}
							style={{ width: '50px', marginTop: '15px' }}
							alt='SuperChat'
						/>
					</Typography>
					<SignOut />
				</Toolbar>
			</AppBar>
		</Box>
	)
}
export default Navbar
