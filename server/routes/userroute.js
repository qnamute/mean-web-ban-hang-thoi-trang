// User routes
var express = require('express');
var usertype = require('../models/usertype');
var router = express.Router();
var mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

//Register
router.post('/register', function(req, res, next){
    User.find({username: req.body.username})
    .exec()
    .then(user => {
        if(user.length >= 1){
            return res.status(409).json({
                message: 'Username exists'
            })
        }else{
            bcrypt.hash(req.body.password, 10, (err, hash)=>{
                if(err){
                    return res.status(500).json({
                        error: err
                    })
                }
                else{
                    let newUser = new User({
                        name: req.body.name,
                        avatar: req.body.avatar,
                        username: req.body.username,
                        password: hash,
                        email: req.body.email,
                        phoneNumber: req.body.phoneNumber,
                        userType: req.body.userTypeId
                    })
                    newUser.save()
                    .then(result =>{
                        res.status(201).json({
                            message: 'User created'
                        });
                    })
                    .catch(err => {
                        console.log(err);
                        res.status(500).json({
                            error: err
                        })
                    })
                }
            })
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        })
    })
    
})
//Login
router.post('/login', function(req, res, next){
    const username = req.body.username;
    const password = req.body.password;
    User.find({username: username})
    .exec()
    .then(user => {
        
        if(user.length < 1){
            return res.status(401).json({
                message: 'Account not existed'
            })
        }
        console.log("password",password);
        console.log("user[0].password",user.password);

        bcrypt.compare(password, user[0].password, (err, result)=>{
            if(err){
                return res.status(401).json({
                    message: 'Auth failed'
                })
            }
            if(result){
                return res.status(200).json({
                    message: 'Auth successfully'
                })
            }
            return res.status(401).json({
                message: 'Autn failed'
            })
        })
        
    })
})
//Delete
router.delete('/:userId', function(req, res, next){
    User.remove({_id: req.params.userId})
    .exec()
    .then(result => {
        res.status(200).json({
            message: 'User deleted'
        });
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        })
    })

})
//export usertype route
module.exports = router;