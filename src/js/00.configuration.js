"use strict";
(function(global) {
  var basePath = "/";

  var Configuration =
    global.dcSettings ||
    (global.dcSettings = {
      urls: {
        api: basePath + "api/",
        data: basePath + "data/",
        templates: basePath + "templates/"
      }
    });
})(this);
