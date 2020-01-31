const express = require('express');
const request = require('request');

const getRequest = (callback, url) => {
    request(url, { json: true }, (err, res, body) => {
        if (err) return callback(err);
        return callback(body);
    })
}
const getIDRequest = (url, callback) => {
    request(url, { json: true }, (err, res, body) => {
        if (err) return callback(err);
        return callback(body);
    })
}
const postRequest = (url, values, callBack) => {
    request({
        url: url,
        method: "POST",
        json: true,
        body: values
    }, function (error, response, body) {
        if (error) console.log(error);
        return callBack(body);
    });
}
const deleteRequest = (url, callback) => {
    request({
        url: url,
        method: "DELETE"
    }, (err, response, body) => {
        if (err) console.log(err);
        return callback(body);
    });
}

module.exports.getRequest = getRequest;
module.exports.postRequest = postRequest;
module.exports.getIDRequest = getIDRequest;
module.exports.deleteRequest = deleteRequest;