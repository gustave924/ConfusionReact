
import * as actionTypes from "./ActionTypes" ;

export const Comments = (state = {
        comments: [],
        errMess: null
    }, action) => {

    switch(action.type){
        case actionTypes.ADD_COMMENTSSSS:
            return{
                ...state,
                comments: action.payload,
                errMess: null
            }
        case actionTypes.COMMENTS_FAILED:
            return{
                ...state,
                errMess: action.payload
            }
        case actionTypes.ADD_COMMENTS:
            let comment = action.payload;
            return ({
                ...state,
                comments: state.comments.concat(comment)
            });
        default:
            return state;
    }

}