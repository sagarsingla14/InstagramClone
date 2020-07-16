import React from 'react'

const Profile = () => {
    return (
        <div style = {{
            maxWidth : "550px",
            margin : "10px auto"
        }}>
            <div style = {{
                display : "flex",
                justifyContent : "space-around",
                margin :  "18px 0px",
                borderBottom : "1px solid Black"
            }}>
                <div>
                    <img style = {{width : "160px",
                        height : "160px",
                        borderRadius : "80px"
                    }}
                    src = "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"/>
                </div>
                <div>
                    <h5> Sagar Singla </h5>
                    <div style = {{
                        display : "flex",
                        justifyContent: "space-between",
                        width: "110%"
                    }}>
                        <h6> 40 Posts </h6>
                        <h6> 40 followers </h6>
                        <h6> 40 following </h6>
                    </div>
                </div>
            </div>



            <div className = "gallery">
                <img className = "item"
                    src = "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"/>
                <img className = "item"
                    src = "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"/>
                <img className = "item"
                    src = "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"/>
                <img className = "item"
                    src = "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"/>
                <img className = "item"
                    src = "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"/>
                <img className = "item"
                    src = "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"/>
				<img className = "item"
                    src = "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"/>
            </div>
        </div>
    )
}

export default Profile
