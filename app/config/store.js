import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import userSapReducer from '../reducers/usersap';
import articleReducer from '../reducers/article';


const reducers = combineReducers({
    userSapStore: userSapReducer,
    articleStore: articleReducer
})

const middleware = applyMiddleware(thunk)

export default createStore (reducers, middleware)