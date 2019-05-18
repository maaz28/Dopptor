"use strict";
function JsonData(settings) {
  var data = settings.urls.api;
  var data = settings.urls.data;

  this.getLoggedUser = function() {
    return $.getJSON(data + "auth.json");
  };

  // used for navigation top bar
  this.getLatestMessages = function(q) {
    return $.getJSON(data + "messages.json");
  };

  this.getLatestEmails = function() {
    return $.getJSON(data + "emails.json");
  };

  this.getPendingTasks = function() {
    return $.getJSON(data + "task.json");
  };

  this.getNotifications = function() {
    return $.getJSON(data + "notifications.json");
  };

  // used for right aside
  this.getAsideTodos = function() {
    return $.getJSON(data + "todos.json");
  };

  // dashboard
  this.getGlobalAudience = function() {
    return $.getJSON(data + "audience.json");
  };

  this.getSocialSubscribers = function(time) {
    return $.getJSON(data + "social/subscribers.json");
  };

  // used to populate the dashboard social-accordion
  this.getRecentlySubscribers = function() {
    return $.getJSON(data + "social/recently-subscribers.json");
  };

  this.getTwitterTrends = function() {
    return $.getJSON(data + "social/twitter-trends.json");
  };

  this.getMostViewedYtVideos = function() {
    return $.getJSON(data + "social/youtube-videos.json");
  };

  this.getFbAudienceGrowth = function() {
    return $.getJSON(data + "social/facebook-audience.json");
  };
}

(function(global) {
  var dcData =
    global.dcData || (global.dcData = new JsonData(global.dcSettings));
})(this);
