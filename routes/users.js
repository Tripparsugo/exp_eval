var express = require('express');
var router = express.Router();

let models = require("../models").model;
const ObjectId = require('mongodb').ObjectId;

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

router.post('/', function(req, res){
  console.log(req.body);
  let new_test_subject = {
    name : req.body.name,
    email : req.body.email,
  }
  models.data.insertOne(new_test_subject).then(result =>{
    if(req.accepts("json")) {
      res.status(201).json(new_test_subject);
    } else {
      res.status(406).end();
    }
  });
});


module.exports = router;
