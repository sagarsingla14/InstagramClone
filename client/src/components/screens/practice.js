import React , {useState} from 'react'
import {Link , useHistory} from 'react-router-dom'

const practice = () => {
	return (
		<div className = "card auth-card" >
			<h1>
				Printed properly
				<input 
					type = "text"
					placeholder = "Email"
				/>
				<input 
					type = "text"
					placeholder = "Email"
				/>
				<input 
					type = "text"
					placeholder = "Email"
				/>
			</h1>
		</div>	
	);
} 

export default practice