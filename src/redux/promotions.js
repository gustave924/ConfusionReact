
import * as actionTypes from "./ActionTypes" ;


export const Promotions = (state = {
        isLoading: true,
        promotions:[],
        errMess: null
    }, action) => {
    
    switch(action.type){
        case actionTypes.PROMOS_LOADING:
            return{
                ...state,
                isLoading: true,
                promotions: [],
                errMess: null
            }
        case actionTypes.PROMOS_FAILED:
            return{
                ...state,
                isLoading: false,
                errMess: action.payload
            }
        case actionTypes.ADD_PROMOS:
            return{
                ...state,
                isLoading: false,
                promotions: action.payload,
                errMess: null
            }
        default:
            return state;
    }

}