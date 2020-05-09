
$("form").on("submit", function(event){
  event.preventDefault();

  var searchTerm = $("#article-search").val().trim();

  var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+ searchTerm +"&api-key=zmW5EKTTjmqn8ZaBEF791w7YD1RurxKA";

  fetch(queryURL, {
    //url: queryURL,
    method: "GET"
  }).then(function(response){

    console.log(response);

    $("#articles-section").text(JSON.stringify(response));
  })
})