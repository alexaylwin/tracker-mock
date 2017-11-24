'use strict';

var url = require('url');

var Activities = require('./ActivitiesService');

module.exports.addRecentActivity = function addRecentActivity (req, res, next) {
  Activities.addRecentActivity(req.swagger.params, res, next);
};

module.exports.getActivities = function getActivities (req, res, next) {
  Activities.getActivities(req.swagger.params, res, next);
};

module.exports.getRecentActivities = function getRecentActivities (req, res, next) {
  Activities.getRecentActivities(req.swagger.params, res, next);
};
