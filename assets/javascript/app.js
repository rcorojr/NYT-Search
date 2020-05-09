
$("#find-article").on("click", function(event){
  event.preventDefault();

  var searchTerm = $(this).val().trim();

  var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+ searchTerm +"&api-key=zmW5EKTTjmqn8ZaBEF791w7YD1RurxKA";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response){

    console.log(response);

    $("#article-view").text(JSON.stringify(response));
  })
})