import { createStore, combineReducers } from "redux";
import {mainReducer, initalState} from "./Reducer";
import { Leaders } from "./leaders";
import { Promotions } from "./promotions";
import { Comments } from "./comments";
import { Dishes } from "./dishes";

export const configureStore = () =>{

    const Store = createStore(
        combineReducers({
            leaders: Leaders, 
            promortions: Promotions, 
            comments: Comments, 
            dishes: Dishes
        })
    );
    
    return Store;

}

