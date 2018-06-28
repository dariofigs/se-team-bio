var queryURL = "https://api.myjson.com/bins/16l34m";
var jsonTree;

$.ajax({
    url: queryURL,
    method: "GET"
}).done(function (response) {
    var jsonTree = response;
    var officeName = []
    var officeClass = []
    for (var i in jsonTree.offices) {
        officeName.push(jsonTree.offices[i].name);
        officeClass.push(jsonTree.offices[i].class);
    }
        var locations = $(".");
        var div = $("<div>");
        div.addClass("fl w-third mw5 mw7-ns center pa3 ph5-ns " + officeClass[0]);
        var link = $("<a>");
        var h2 = $("<h2>").html(officeName[0]);
        h2.addClass("f2");
        var span = $("<span>");
        span.addClass("bar little-bar")
        link.append(h2);
        div.append(link);
        div.append(span);
        locations.append(div);
});

{/* <div class="fl w-third mw5 mw7-ns center pa3 ph5-ns chicago">
            <a><h2 class="f2">Chicago</h2></a>
            <span class="bar little-bar"></span>
</div> */}