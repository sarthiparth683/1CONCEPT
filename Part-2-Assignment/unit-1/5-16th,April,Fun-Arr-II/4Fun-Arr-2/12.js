// #### ImplementationPS10
// input
const data = [
    {
        name: "Superman",
        favoriteIceCreams: [
            "Strawberry",
            "Vanilla",
            "Chocolate",
            "Cookies & Cream",
        ],
    },
    {
        name: "Batman",
        favoriteIceCreams: [
            "Cookies & Cream",
            "Mint Chocolate Chip",
            "Chocolate",
            "Vanilla",
        ],
    },
    {
        name: "Flash",
        favoriteIceCreams: ["Chocolate", "Rocky Road", "Pistachio", "Banana"],
    },
    {
        name: "Aquaman",
        favoriteIceCreams: ["Vanilla", "Chocolate", "Mint Chocolate Chip"],
    },
    {
        name: "Green Lantern",
        favoriteIceCreams: [
            "Vanilla",
            "French Vanilla",
            "Vanilla Bean",
            "Strawberry",
        ],
    },
    {
        name: "Robin",
        favoriteIceCreams: ["Strawberry", "Chocolate", "Mint Chocolate Chip"],
    },
];


// - output
// {
//       Strawberry: 3,
//       Vanilla: 4,
//       Chocolate: 5,
//       "Cookies & Cream": 2,
//       "Mint Chocolate Chip": 3,
//       "Rocky Road": 1,
//       Pistachio: 1,
//       Banana: 1,
//       "French Vanilla": 1,
//       "Vanilla Bean": 1,
//     }

// - `ImplementationPS10` function takes `data` array as a input and returns a object with unique `favoriteIceCreams` as key and the value is the count of how many people liked it.
// - as example `Vanilla Bean` only liked by `Green Lantern` so the here the value is `1`.


function ImplementationPS10(data) {
    const iceCreamCounts = {};
    data.forEach(person => {
        person.favoriteIceCreams.forEach(iceCream => {
            iceCreamCounts[iceCream] = (iceCreamCounts[iceCream] || 0) + 1;
        });
    });
    return iceCreamCounts;
}
console.log(ImplementationPS10(data));






