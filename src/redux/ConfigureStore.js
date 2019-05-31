import { createStore, combineReducers } from "redux";
import { Leaders } from "./leaders";
import { Promotions } from "./promotions";
import { Comments } from "./comments";
import { Dishes } from "./dishes";

export const configureStore = () =>{

    const Store = createStore(
        combineReducers({
            leaders: Leaders, 
            promotions: Promotions, 
            comments: Comments, 
            dishes: Dishes
        })
    );
    
    return Store;

}

