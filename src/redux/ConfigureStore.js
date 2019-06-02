import { createStore, combineReducers, applyMiddleware } from "redux";
import { Leaders } from "./leaders";
import { Promotions } from "./promotions";
import { Comments } from "./comments";
import { Dishes } from "./dishes";
import thunk from 'redux-thunk';
 
export const configureStore = () =>{

    const Store = createStore(
        combineReducers({
            leaders: Leaders, 
            promotions: Promotions, 
            comments: Comments, 
            dishes: Dishes
        }),
        applyMiddleware(thunk)
    );
    
    return Store;

}

