var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=zmW5EKTTjmqn8ZaBEF791w7YD1RurxKA";



function formatQueryParams(params) {
  const queryItems = Object.keys(params)
    .map(key => `${key}=${params[key]}`)
  
    return queryItems.join('&');
}

$.ajax({
    url: queryURL,
    method: "GET"
})
.then(function(response){
  console.log(response)
});