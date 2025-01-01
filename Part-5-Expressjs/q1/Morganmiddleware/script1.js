 
const validateBody = (req, res, next) => {
    const { name, rating, description, genre, cast } = req.body;

    // Validate name
    if (typeof name !== "string") {
        return res.status(400).send("Bad request! Name should be a string!")
    } 

    // Validate rating
    if (typeof rating !== "number") {
        return res.status(400).send("Bad request! Rating should be a number!")
    } 

    // Validate rating
    if (typeof description !== "string") {
        return res.status(400).send("Bad request! Description should be a string!")
    } 

    // Validate genre
    if (typeof genre !== "string") {
        return res.status(400).send("Bad request! Genre should be a string!")
    } 

    // typeof obj === "object"

    // cast = [true]
    // Validate cast
    if (!Array.isArray(cast) || !cast.every(el => typeof el === "string")) {
        return res.status(400).send("Bad request! Cast should be an array of string!")
    }

    next()
}

module.exports = validateBody

