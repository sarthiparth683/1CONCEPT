// let url = "https://jsonplaceholder.typicode.com/posts";
// let url = "https://api.openweathermap.org/data/2.5/weather?q=London";
// let url = "https://dog.ceo/api/breeds/image/random";
// let url = "https://official-joke-api.appspot.com/random_joke";
// ==========================================================
// Method - I

// fetch(url)
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//     let container = document.getElementById("container");
//     let image = document.createElement("img");
//     image.src = data.message;

//     container.append(image);
//   })
//   .catch((error) => console.error(error));
// ========================================================
// Method - II

async function getJoke() {
  try {
    const res = await fetch(url);
    // console.log(res)
    const data = await res.json();
    console.log(data);

    let container = document.getElementById("container");
    let image = document.createElement("img");
    image.src = data.message;

    container.append(image);
  } catch (err) {
    console.log(err);
  }
}

getJoke();
// ==========================================================

const users = {
  user1: { id: 1, name: "Parth", age: 22, city: "Jamshedpur" },
  user2: { id: 2, name: "Raj", age: 25, city: "Mumbai" },
  user3: { id: 3, name: "Sneha", age: 23, city: "Delhi" },
  user4: { id: 4, name: "Vikram", age: 27, city: "Pune" },
};

for (let key in users) {
  console.log(key);
  console.log(users[key]);
  console.log(users[key].name);
}
