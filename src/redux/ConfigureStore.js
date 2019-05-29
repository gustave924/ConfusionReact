import { createStore } from "redux";
import {mainReducer, initalState} from "./Reducer";


export const configureStore = () =>{

    const Store = createStore(
        mainReducer,
        initalState
    );
    
    return Store;

}

