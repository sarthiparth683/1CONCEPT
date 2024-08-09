
import {createStore} from 'redux';
import {combineReducers} from 'redux';
import counterReducer from './reducers'

const rootReducer = combineReducers({
    counter: counterReducer
})

const store = createStore(rootReducer);

export default store   