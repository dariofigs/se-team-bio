var queryURL = "https://api.myjson.com/bins/17g5ye";
var jsonTree;

$.ajax({
    url: queryURL,
    method: "GET"
}).done(function (response) {
    var jsonTree = response;
    var keyWord = new URL(document.location).searchParams.get("office");
    console.log(keyWord);

    $("#blah").addClass(keyWord);

});

