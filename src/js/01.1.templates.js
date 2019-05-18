"use strict";
function StaticTemplates(settings) {
  var path = settings.urls.templates;

  this.getLatestMessagesTemplate = function() {
    return $.get({ url: path + "/_messages.tmpl", dataType: "html" });
  };

  this.getPendingTasksTemplate = function() {
    return $.get({ url: path + "/_tasks.tmpl", dataType: "html" });
  };

  this.getNotificationsTemplate = function() {
    return $.get({ url: path + "/_notifications.tmpl", dataType: "html" });
  };

  this.getTodosTemplate = function() {
    return $.get({ url: path + "/_todos.tmpl", dataType: "html" });
  };

  this.getUsersTemplate = function() {
    return $.get({ url: path + "/_users.tmpl", dataType: "html" });
  };

  this.getEmailListTemplate = function() {
    return $.get({ url: path + "/inbox/_emails.tmpl", dataType: "html" });
  };

  this.getEmailMessageTemplate = function() {
    return $.get({
      url: path + "/inbox/_email-content.tmpl",
      dataType: "html"
    });
  };

  this.getDashboardTemplate = function(name) {
    return $.get({
      url: path + "/dashboard/_" + name + ".tmpl",
      dataType: "html"
    });
  };

  this.getAudienceTemplate = function() {
    return $.get({ url: path + "/dashboard/_audience.tmpl", dataType: "html" });
  };
}

(function(global) {
  var templates =
    global.dcTemplates ||
    (global.dcTemplates = new StaticTemplates(global.dcSettings));
})(this);
