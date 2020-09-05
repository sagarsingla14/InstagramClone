import React , {useState , useEffect} from 'react'
import M from 'materialize-css'
import {useHistory} from 'react-router-dom'

const CreatePost = () => {
	const history = useHistory()
	const [title , setTitle] = useState("")
	const [body , setBody] = useState("")
	const [image , setImage] = useState("")
	const [url , setUrl] = useState("")

	useEffect (() => {
		if(url) {
			fetch("/createpost", {
				method: "post",
				headers: {
					"Content-Type": "application/json" ,
					"Authorization" : "Bearer " + localStorage.getItem("jwt")
				},
				body: JSON.stringify({
					title,
					body,
					pic : url
				})
			})
			.then(res => res.json())
			.then(data => {
				console.log(data);
				if (data.error) {
					M.toast({ html: data.error, classes: "#000000 Black" })
				} else {
					M.toast({ html: "Created Post Successfully", classes: "#000000 Black" })
					history.push('/')
				}
			})
			.catch(err => {
				console.log(err)
			})
		}
	} , [url])


	const postDetails = () => {
		const data = new FormData()
		data.append("file" , image)
		data.append("upload_preset" , "insta-clone")
		data.append("cloud_name" , "sagarsingla")

		fetch("https://api.cloudinary.com/v1_1/sagarsingla/image/upload" , {
			method : "post",
			body : data
		})
		.then(res => res.json())
		.then(data => {
			setUrl(data.url)
		})
		.catch(err => console.log(err))
	}

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
				value = {title}
				onChange = {(e) => setTitle(e.target.value)}
            />
            <input
                type = "text"
				placeholder = "body"
				value = {body}
				onChange = {(e) => setBody(e.target.value)}
            />
            <div className = "file-field input-field">
                <div className = "btn  button">
                    <span> Upload Image </span>
					<input type="file"
						onChange = {(e) => setImage(e.target.files[0])}
					/>
                </div>
                <div className = "file-path-wrapper">
                    <input className ="file-path validate" type="text" />
                </div>
            </div>
            <button className = "btn button"
				onClick = {() => postDetails()}
			>
                Post Image
            </button>
        </div>
    )
}

export default CreatePost