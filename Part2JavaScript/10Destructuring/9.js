// We can use object destructuring:  
function fetchData({baseUrl,query,maxResults,orderby}){

}

// we can change the order
fetchData({
    baseUrl:'<https://www.googleapis.com/youtube/v3/search>',
    orderby:'date',
    maxResults:10,
    query:'masai'

})

