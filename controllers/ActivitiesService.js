'use strict';
var recentMock = require('./recent-activities.mock.json');
var activitiesMock = require('./activities.mock.json');

exports.addRecentActivity = function(args, res, next) {
  /**
   * Record a completed activity
   * Record a completed activity for this user
   *
   * userid Integer The user id
   * activity ActivityRecord The activity to add
   * no response value expected for this operation
   **/
  console.log(args);
  console.log(res);
  var response = {
    "startTime":"12:00 PM",
    "endTime":"12:02 PM",
    "activityId":1
  };
  console.log(response);

  if(Object.keys(examples).length == 0) {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Status', '200');
    res.end(JSON.stringify(response || {}, null, 2));
  } else {
    res.end();
  }
}

exports.getActivities = function(args, res, next) {
  /**
   * Retrieve a user's activity list
   * 
   *
   * userid Integer The user id
   * returns List
   **/
  var examples = activitiesMock;
  console.log(examples);
  //examples['application/json'] = [ {
  //"name" : "aeiou",
  //"id" : 0
//} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples || {}, null, 2));
  } else {
    res.end();
  }
}

exports.getRecentActivities = function(args, res, next) {
  /**
   * Get a users recent activities
   * 
   *
   * userid Integer The user id for whom to retrieve activties
   * returns List
   **/
  var examples = recentMock;
  //examples['application/json'] = [ {
  //"start-time" : "aeiou",
  //"end-time" : "aeiou",
  //"activity-id" : 0
//} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples || {}, null, 2));
  } else {
    res.end();
  }
}
