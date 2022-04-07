import { useState, useEffect, useRef } from 'react'
import {
	onSnapshot,
	collection,
	query,
	orderBy,
	limit,
} from 'firebase/firestore'
import { db } from '../firebase.config'
import Navbar from './Navbar'
import SendMessage from './SendMessage'
import { Paper } from '@mui/material'
import ChatMessage from './ChatMessage'

function ChatRoom() {
	const scroll = useRef()
	const [messages, setMessages] = useState([])

	useEffect(() => {
		//Get reference to the collection, not the document
		const messageRef = collection(db, 'messages')

		//Create query
		const q = query(messageRef, orderBy('createdAt', 'desc'), limit(25))

		//Execute query
		const unsubscribe = onSnapshot(q, (querySnapshot) => {
			const messages = []
			querySnapshot.forEach((doc) => {
				return messages.push({
					id: doc.id,
					data: doc.data(),
				})
			})
			setMessages(messages)
		})
	}, [])
	return (
		<>
			<Navbar />
			<main>
				<div className='messages'>
					{messages.map((message) => (
						<ChatMessage key={message.id} message={message} />
					))}
				</div>
				<div ref={scroll}></div>
			</main>
			<SendMessage scroll={scroll} />
		</>
	)
}
export default ChatRoom
