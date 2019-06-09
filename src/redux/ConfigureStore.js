import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { createForms } from "react-redux-form";
import { initalFeedback } from "./form.js";
import { Leaders } from "./leaders";
import { Promotions } from "./promotions";
import { Comments } from "./comments";
import { Dishes } from "./dishes";
import thunk from 'redux-thunk';
 
export const configureStore = () =>{

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const Store = createStore(
        combineReducers({
            leaders: Leaders, 
            promotions: Promotions, 
            comments: Comments, 
            dishes: Dishes,
            ...createForms({feedback: initalFeedback})
        }),composeEnhancers(
        applyMiddleware(thunk))
    );
    
    return Store;

}

