import React from 'react'

const CreatePost = () => {
    return (
        <div className = "card input-field" style = {{
            maxWidth : "500px",
            margin :  "20px auto",
            padding : "15px",
            textAlign : "center"
        }} >
            <input
                type = "text"
                placeholder = "title"
            />
            <input
                type = "text"
                placeholder = "Caption"
            />
            <div className = "file-field input-field">
                <div className = "btn  button">
                    <span> Upload Image </span>
                    <input type="file" />
                </div>
                <div className = "file-path-wrapper">
                    <input className ="file-path validate" type="text" />
                </div>
            </div>
            <div className = "btn button">
                Post Image
            </div>
        </div>
    )
}

export default CreatePost
