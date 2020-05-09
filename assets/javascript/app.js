var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=zmW5EKTTjmqn8ZaBEF791w7YD1RurxKA";

$("#find-article").on("click", handleQuery = (e) => {
  event.preventDefault();
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response){

    console.log(response);

    $("#article-view").text(JSON.stringify(response));
  })
})