import {combineReducers, legacy_createStore as createStore} from "redux" 
import countReducer from "./countReducer"

const rootReducer = combineReducers({
    count: countReducer,
})

const store = createStore(rootReducer);

export default store;