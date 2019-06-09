
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
            comment.date = new Date().toISOString();
            comment.id = state.length
            return state.concat(comment);
        default:
            return state;
    }

}