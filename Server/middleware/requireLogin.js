const express = require('express')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const {JWT_SECRET} = require('../keys')
const User = mongoose.model("User")

module.exports = (req , res , next) => {
    const {authorization} = req.headers
    if(!authorization) {
        res.status(401).send({error : "You must be logged in !!!"})
    }
    const token = authorization.replace("Bearer " , "")
    jwt.verify(token , JWT_SECRET , (err , payload) => {
        if(err) {
            res.status(401).send({error : "You must be logged in !!!"})
        }
        const {_id} = payload
        User.findById(_id)
        .then(userdata => {
            if(!userdata) {
                return res.status(401).send({error : "User not found in Database!!!"})
            }
            else{
                req.user = userdata
                console.log(req.user)
                next()
            }
        })
    })
}