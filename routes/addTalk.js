var express = require('express');
var router = express.Router();
let api = require('../apis/apis');

//go to create new talk page
router.get('/', (req, res, next) => {
    res.render('addTalk');
});
//create new talk
router.post('/', (req, res, next) => {
    let newTalk = {
        topic: req.body.topic,
        location: req.body.location,
        time: req.body.time
    }
    const callBack = () => {
        res.render('success');
    }
    const url = "https://talks-rest-api.herokuapp.com/talks";
    api.postRequest(url, newTalk, callBack);
});

module.exports = router;