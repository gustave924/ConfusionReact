import * as actionTypes from "./ActionTypes" ;




export const Leaders = (state = {
    leaders: [],
    error: "",
    isLoading: true
}, action) => {

    switch (action.type) {
        case actionTypes.ADD_LEADERS:
            return{
                ...state,
                error: null,
                isLoading: false,
                leaders: action.payload
            }
        case actionTypes.LEADERS_FAILED:
            return{
                ...state,
                error: action.payload,
                isLoading:false
            }
        case actionTypes.LEADERS_LOADING:
            return{
                ...state,
                error:null,
                isLoading:true,
                leaders:[]
            }
        default:
            return state
    }

};