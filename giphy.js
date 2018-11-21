var searchTerm = "cheese";
var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&api_key=4btExzCqrIIJAqYTzGKfqF6iSE50FoMo&limit=1";
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
    console.log(response.data);
    response.data.forEach(function(gif) {
        $("body").append("<img src=\"" + gif.images.fixed_height.url + "\">");
    });
});


// TRENDING
queryURL = "http://api.giphy.com/v1/gifs/trending?api_key=4btExzCqrIIJAqYTzGKfqF6iSE50FoMo&limit=1";
$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response.data);
    response.data.forEach(function(gif) {
      $("body").append("<img src=\"" + gif.images.fixed_height.url + "\">");
    });
  });
  