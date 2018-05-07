'use strict';

var url = require('url');

var Activities = require('./ActivitiesService');

module.exports.recordActivity = function recordActivity (req, res, next) {
  Activities.recordActivity(req.swagger.params, res, next);
};

module.exports.getActivities = function getActivities (req, res, next) {
  Activities.getActivities(req.swagger.params, res, next);
};

module.exports.getRecordedActivities = function getRecordedActivities (req, res, next) {
  Activities.getRecordedActivities(req.swagger.params, res, next);
};
