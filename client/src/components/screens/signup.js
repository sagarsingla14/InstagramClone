import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import M from 'materialize-css'

const Signup = () => {
    const history = useHistory()
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    const PostData = () => {
        if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
            M.toast({ html: 'Invalid email', classes: "#c62828 red" })
            return
        }
        fetch("/signup", {
			method: "post",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				name,
				password,
				email
			})
		})
		.then(res => res.json())
		.then(data => {
			if (data.error) {
				M.toast({ html: data.error, classes: "#c62828 red" })
			}
			else {
				M.toast({ html: data.message, classes: "#43a047 green" })
				history.push('/signin')
			}
		})
		.catch(err => {
			console.log(err);
		})
    }


    return (
        <div className = "mycard" >
            <div className = "card auth-card input-field" >
                <h2 className = "brand-logo"> Instagram </h2>
                <input type = "text"
                    placeholder = "Name"
                    value = { name }
                    onChange = {
                        (e) => setName(e.target.value) }
                />
                <input type = "text"
                    placeholder = "Email"
                    value = { email }
                    onChange = {
                        (e) => setEmail(e.target.value) }
                />
                <input type = "password"
                    placeholder = "Password"
                    value = { password }
                    onChange = {
                        (e) => setPassword(e.target.value) }
                />
                <button className = "btn button"
                    onClick = {
                        () => {
                            PostData()
                        }
                    } >
                    SignUp
                </button>
                <Link to = "/signin"> <h6> Already have an account ? </h6> </Link >
            </div>
        </div>
    )
}

export default Signup
