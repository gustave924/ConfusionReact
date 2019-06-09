
import * as actionTypes from "./ActionTypes" ;


export const Promotions = (state = {
        isLoading: true,
        promotions:[],
        errMes: null
    }, action) => {
    
    switch(action.type){
        case actionTypes.PROMOS_LOADING:
            return{
                ...state,
                isLoading: true,
                promotions: [],
                errMes: null
            }
        case actionTypes.PROMOS_FAILED:
            return{
                ...state,
                isLoading: false,
                errMes: action.payload
            }
        case actionTypes.ADD_PROMOS:
            return{
                ...state,
                isLoading: false,
                promotions: action.payload,
                errMes: null
            }
        default:
            return state;
    }

}