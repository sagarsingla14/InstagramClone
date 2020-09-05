import React, {useState , useContext} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {UserContext} from '../../App'
import M from 'materialize-css'

const Signin = () => {
	const {state , dispatch} = useContext(UserContext)
    const history = useHistory()
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    const PostData = () => {
        if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
            M.toast({ html: 'Invalid email', classes: "#000000 Black" })
            return
        }

        fetch("/signin", {
			method: "post",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				email,
				password
			})
		})
		.then(res => res.json())
		.then(data => {
			console.log(data);
			if (data.error) {
				M.toast({ html: data.error, classes: "#000000 Black" })
			} else {
				localStorage.setItem("jwt" , data.token)
				localStorage.setItem("user" , JSON.stringify(data.user))

				dispatch({type : "USER" , payload : data.user})
				M.toast({ html: "Signed In", classes: "#000000 Black" })
				history.push('/')
			}
		})
		.catch(err => {
			console.log(err)
		})
    }

    return (
        <div className = "mycard">
            <div className = "card auth-card input-field">
                <h2 className = "brand-logo"> Instagram </h2>
                    <input type = "text"
						placeholder = "Email"
						value = {email}
						onChange = {
                        (e) => setEmail(e.target.value) }
                    />
                    <input type = "text"
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
						SignIn
					</button>
                <Link to = "/signup" > < h6 > Don 't have an account? </h6> </Link>
            </div>
        </div>
    )
}

export default Signin