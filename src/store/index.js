import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import authReducer from "./auth/reducer";
import messageReducer from "./message/reducer";


let middleware = [thunk]
let configStore = applyMiddleware(...middleware)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reducer = combineReducers({
    auth: authReducer,
    message: messageReducer
})

if (process.env.NODE_ENV === "development") {
    middleware = [...middleware];
    configStore = composeEnhancers(applyMiddleware(...middleware));
}


const store = createStore(reducer, configStore)



export default store