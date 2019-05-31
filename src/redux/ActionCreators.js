import * as actionTypes from "./ActionTypes" ;


export const addComment = (dishId, rating, author, comment) => ({
    type: actionTypes.ADD_COMMENTS,
    payload:{
        dishId:  dishId,
        rating:  rating,
        author:  author,
        comment: comment,
    }
})