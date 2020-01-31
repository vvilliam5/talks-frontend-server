var express = require('express');
const request = require('request');
var router = express.Router();
let api = require('../apis/apis');

const baseURL = 'https://talks-rest-api.herokuapp.com/talks/';
/* GET home page. */
router.get('/', (req, res, next) => {
  const callBack = (val) => {
    let number = 0;
    res.render('index', { talks: val, num: number });
  }
  api.getRequest(callBack, baseURL);
});

//get individual talk page
router.get('/:id', (req, res, next) => {
  const callBack = (val) => {
    res.render('talk', { talk: val });
  }
  let url = baseURL + req.params.id;
  api.getIDRequest(url, callBack);
})

//delete talk 
router.get('/:id/delete', (req, res, next) => {
  const callBack = (val) => {
    res.render('success');
  }
  let url = baseURL + req.params.id;
  api.deleteRequest(url, callBack);
})

//get attendees page
router.get('/:id/attendees', (req, res, next) => {
  const callBack = (val) => {
    let number = 0;
    res.render('attendees', { attendees: val, talkid: req.params.id, num: number });
  }
  let url = baseURL + req.params.id + '/attendee';
  api.getRequest(callBack, url);
})

//create new attendee
router.post('/:id/attendee', (req, res, next) => {
  let newAttendee = {
    name: req.body.name,
    email: req.body.email,
    talkID: req.body.talkid
  }
  const callBack = () => {
    res.render('success');
  }
  let url = baseURL + req.params.id + '/attendee';
  api.postRequest(url, newAttendee, callBack);
})

//delete an attendee
router.get('/:id/attendee/:aID/delete', (req, res, next) => {
  const callBack = (val) => {
    res.render('success');
  }
  let url = `https://talks-rest-api.herokuapp.com/attendees/${req.params.aID}`;
  api.deleteRequest(url, callBack);
})


module.exports = router;
