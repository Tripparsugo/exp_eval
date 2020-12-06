const express = require('express');
const router = express.Router();
let models = require("../models").model;


/* GET home page. */
router.get('/:password', function (req, res, next) {
        if (req.params.password === process.env.DB_PASSWORD) {
            models.data.find({}).toArray(function (err, result) {
                if (err) throw err;
                res.send(result);
            });

        } else {

            res.status(401).end();
        }

        console.warn("ACCESS TO DB");

    }
);

router.get('/DELETE/:password', function (req, res, next) {
        if (req.params.password === process.env.DB_PASSWORD) {
            models.data.deleteMany({});
            res.status(200).end();
        } else {
            res.status(401).end();
        }
        console.warn("ACCESS TO DB");

    }
);


module.exports = router;