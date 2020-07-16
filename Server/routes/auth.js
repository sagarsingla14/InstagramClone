const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {JWT_SECRET} = require('../keys')
const requireLogin = require('../middleware/requireLogin')

const User = mongoose.model("User")

router.get('/protected' , requireLogin , (req , res) =>  {
    res.send('Accessed protected resource')
})

router.get('/' , (req , res) =>  {
    res.send("Route Set Up!!")
})

router.post('/signup' , (req , res) => {
    const {name , email , password} = req.body
    if(!email || !name || !password) {
        return res.status(422).send({error : "Enter all fields"});
    }
    User.findOne({email : email})
    .then(savedUser => {
        if(savedUser) {
            return res.status(422).send({error : "User Already Exists"});
        }
        bcrypt.hash(password , 11)
        .then(hashedPass => {
            const user = new User({
                email : email ,
                name : name ,
                password : hashedPass
            })

            user.save()
            .then(user => {
                res.json({message : "saved Successfully"})
            })
            .catch(err => {
                console.log(err)
            })
        })
    })
    .catch(err => {
        console.log(err);
    })
})

router.post('/signin' , (req , res) => {
    const {email , password} = req.body;
    if(!email || !password) {
        res.status(422).json({message : "Add all fields"})
    }
    User.findOne({email : email})
    .then(savedUser => {
        if(!savedUser) {
            return res.status(422).json({error : "Account doesn't Exists"})
        }
        bcrypt.compare(password , savedUser.password)
        .then(match => {
            if(!match) {
                return res.status(422).json({error : "Invalid email or password"})
            }

            // if user is signed in then it will carry jwt Token
            const token = jwt.sign({_id : savedUser._id} , JWT_SECRET)
            const {_id , name , email} = savedUser
            res.json({token , user : {_id , email , name}})
        })
        .catch(err => {
            console.log(err);
        })
    })
})

module.exports = router
