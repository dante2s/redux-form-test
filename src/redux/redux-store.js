import {reducer as formReducer} from "redux-form";
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk" //импортируем thunkMiddleware, а не thunk
let bunchReducer = combineReducers({
    form: formReducer
});
let store = createStore(bunchReducer, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;