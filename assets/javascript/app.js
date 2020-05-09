var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=zmW5EKTTjmqn8ZaBEF791w7YD1RurxKA";

$.ajax({
    url: queryURL,
    method: "GET"
})
    .then(function(response)
    
    )