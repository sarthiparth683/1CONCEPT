async function fetchData() {
    try {
        // let res = await fetch(`https://fakestoreapi.com/products`);
        // let res = await fetch(` https://www.omdbapi.com/?i=tt3896198&apikey=507dc498`);
        let res = await fetch(`https://www.omdbapi.com/?apikey=a4ed1e08&s=avatar`);
        // let res = await fetch(`https://www.omdbapi.com/?apikey=a4ed1e08&s`);
        let data = await res.json()
        console.log(data);
        //   console.log(data.Search);
        //   appendCard(data.Search);
    } catch (err) {
        console.log(err);
    }
};
fetchData()
// console.log(fetchData());
