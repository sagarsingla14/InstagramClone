import React from 'react'
import {Link} from 'react-router-dom'

const navbar = () => {
    return (
        <nav>
			<div className = "nav-wrapper grey">
				<Link to = "/" className = "brand-logo left"> Instagram </Link>
				<ul id = "nav-mobile" className = "right">
					<li> <Link to = "/signin" > SignIn </Link> </li>
					<li> <Link to = "/signup" > Signup </Link> </li>
					<li> <Link to = "/profile" > Profile </Link> </li>
					<li> <Link to = "/createpost" > Create Post </Link> </li>
					<li> <Link to = "/practice" > Practice </Link> </li>
				</ul>
			</div>
        </nav>
    )
}

export default navbar
