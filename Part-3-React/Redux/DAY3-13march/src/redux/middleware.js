const customMiddleware = (store) => (next) => (action) => {
    console.log("From Cutom MW:", action.type)
    next(action)
}  