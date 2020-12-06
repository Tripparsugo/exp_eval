var express = require('express');
var router = express.Router();
let models = require("../models").model;
const ObjectId = require('mongodb').ObjectId;

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('test', { title: 'Welcome to our experiment' });
});

router.post('/', function(req, res){

    let new_test_subject = {
        name : req.body.name,
        email : req.body.email,
    }
    models.data.insertOne(new_test_subject).then(result =>{
        console.log(result.ops[0]._id);
        res.json(result.ops[0]._id);
    });
});

router.put('/:id', function(req, res){
    let update = {
        _id : ObjectId(req.params.id),
        camelResult : req.body.camelResult,
        kebabResult : req.body.kebabResult
    }
    let filter = {_id : ObjectId(req.params.id)};
    models.data.replaceOne(filter, update).then(result =>{
        res.status(201).end();
    })
})

module.exports = router;