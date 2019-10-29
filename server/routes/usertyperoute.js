var express = require('express');
var UserType = require('../models/usertype');
var router = express.Router();
var mongoose = require('mongoose');

//Get All Usertype
router.get('/', function(req, res, next) {
    UserType.find()
    .exec()
    .then(result => {
        res.status(200).json({
            message: "List UserTypes",
            usertype: result
        })
    })
    .catch(err =>{
        console.log(err);
    })
});
//Add method POST (localhost:8000/userroutes/)
router.post('/', function(req, res, next){
    var usertype = new UserType({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        description: req.body.description
    });
    console.log(usertype);
    usertype.save()
    .then(result =>{
        console.log(result);
        res.status(200).json(result)
    })
    .catch(err => {
        console.log(err);
        
    })
});
//Update Method PUT
router.put('/:userId', function(req, res){
    console.log(req.body)
    UserType.findById(req.params.userId)
    .then((user) => {
        if(req.body.name){
            user.name = req.body.name;
        }
        if(req.body.description){
            user.description = req.body.description;
        }
        user.save(function(err){
            if(err)
            {
               console.log("Update failed");
            }
            res.json({
                message: 'Update UserType success!'
            })
        })
    })
    .catch(err=>{
        res.json({
            message: 'Not found User from UserId'
        })
    })
})
//Delete 
router.delete('/:userId', function(req, res){
    UserType.remove({
        _id: req.params.userId
    }, function(err, user){
        if(err) return res.send(err)
        res.json({
            message: 'Successfully deleted'
        });
    })
})

//

//export usertype route
module.exports = router;
