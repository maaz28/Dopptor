"use strict";

(function($, data, $scope) {
  $(function() {
    $scope.table = $("#html-table");

    $("thead th", $scope.table).each(function(i, th) {
      $("tbody td:nth-child(" + (i + 1) + ")", $scope.table).attr(
        "data-title",
        $(th).html()
      );
    });
  });
})(jQuery, dcData, {});
