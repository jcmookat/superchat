import { auth } from '../firebase.config'
function ChatMessage(props) {
	const { text, uid, photoURL } = props.message.data
	return (
		<div
			className={`message ${
				uid === auth.currentUser.uid ? 'sent' : 'received'
			}`}>
			<img src={photoURL} alt='' />
			<p>{text}</p>
		</div>
	)
}
export default ChatMessage
