/*jslint browser: true*/
/*global $, jQuery, alert*/
$(document).ready(function () {
    
    "use strict";
    $.getJSON("./dataTable.json", function (data) {
        var items = [];
        $.each(data, function (key, val) {
            items.push("<tr>");
          items.push("<td id='" + key + "'>" + val.first_name + "</td");
            items.push("<td id='" + key + "'>" + val.last_name + "</td");
            items.push("<td id='" + key + "'>" + val.home + "</td");
            items.push("</tr>");
        });
        $("<tbody>", {"class": "mydata", html: items.join("") }).appendTo("table");
    });
});

