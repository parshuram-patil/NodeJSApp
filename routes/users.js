var express = require('express');
var router = express.Router();
var consoleLogger = require('../utils/logger/consolelogger');

router.get('/', function(req, res, next) {
  consoleLogger.info('User Service Info');
  consoleLogger.error('User Service Error');
  consoleLogger.warn('User Service Warn')
  res.send('respond with a resource');
});

module.exports = router;
