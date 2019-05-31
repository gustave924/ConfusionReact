import { COMMENTS } from '../shared/comments';
import * as actionTypes from "./ActionTypes" ;

export const Comments = (state = COMMENTS, action) => {

    switch(action.type){
        case actionTypes.ADD_COMMENTS:
            let comment = action.payload;
            comment.date = new Date().toISOString();
            comment.id = state.length
            return state.concat(comment);
        default:
            return state;
    }

}