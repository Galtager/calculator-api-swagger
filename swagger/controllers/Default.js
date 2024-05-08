'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.authPOST = function authPOST (req, res, next, body) {
  Default.authPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.calcPOST = function calcPOST (req, res, next, body, op) {
  Default.calcPOST(body, op)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
