const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const requireLogin = require('../middleware/requireLogin')
const User = mongoose.model("User")
const Post = mongoose.model("Post")

router.post('/createpost' , requireLogin , (req , res) => {
    const {title , body} = req.body
    if(!title || !body) {
        return res.status(422).json({error : "Please add all fields"})
    }

    req.user.password = undefined
    const post = new Post({
        title : title ,
        body : body ,
        postedBy : req.user
    })

    post.save()
    .then(result => {
        res.send({post : result})
    })
    .catch(err => {
        console.log(err);
    })
})

router.get('/allpost' , (req , res) => {
    Post.find()
    .populate("postedBy" , "id name")
    .then(posts => {
        res.json({posts : posts})
    })
    .catch(err => {
        console.log(err);
    })
})

router.get('/mypost' , requireLogin , (req , res) => {
    Post.find({postedBy : req.user._id})
    .populate("postedBy" , "name _id")
    .then(mypost => {
        res.json({mypost : mypost})
    })
    .catch(err => {
        console.log(err)
    })
})

module.exports = router
