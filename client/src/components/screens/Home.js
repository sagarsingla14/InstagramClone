import React from 'react'

const Home = () => {
    return (
        <div className = "home" >
            <div className = "card home-card" >
                <h5 > Sagar Singla </h5>
                <div className = "card-image" >
                    <img src = "https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?ixlib=rb-1.2.1&w=1000&q=80"/>
                </div>
                <div>
                <i className = "material-icons"
                style = {
                    {
                        color: "Red"
                    }
                } >
					favorite
                </i>
                <h6> Caption </h6>
                <p> Art </p>
                <input
					type = "text"
                    placeholder = "Add a comment" />
                </div>
            </div>

			<div className = "card home-card">
				<h5>Sagar Singla</h5>
				<div className = "card-image" >
                    <img src = "https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?ixlib=rb-1.2.1&w=1000&q=80"/>
                </div>
                <div>
                <i className = "material-icons"
                style = {
                    {
                        color: "Red"
                    }
                } >
					favorite
                </i>
                <h6> Caption </h6>
                <p> Art </p>
                <input
					type = "text"
                    placeholder = "Add a comment" />
                </div>
			</div>
        </div>
    )
}

export default Home
