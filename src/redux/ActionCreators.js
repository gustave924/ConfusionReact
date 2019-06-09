import * as actionTypes from "./ActionTypes" ;
import {baseUrl} from "../shared/baseUrl";
import fetch from "cross-fetch";

export const addComment = (dishId, rating, author, comment) => ({
    type: actionTypes.ADD_COMMENTS,
    payload:{
        dishId:  dishId,
        rating:  rating,
        author:  author,
        comment: comment,
    }
})

export const fetchDishes = () => (dispatch) => {

    dispatch(dishesLoading(true));
    
    return fetch(baseUrl+"dishes")
        .then(response => response.json())
        .then(dishes => dispatch(addDishes(dishes)))
    
}

export const dishesLoading = () => ({
    type: actionTypes.DISHES_LOADING
});

export const dishesFailed = (errmess) => ({
    type: actionTypes.DISHES_FAILED,
    payload: errmess
});

export const addDishes = (dishes) => ({
    type: actionTypes.ADD_DISHES,
    payload: dishes
});

export const fetchComments = () => (dispatch) =>{
    return fetch(baseUrl + "comments")
        .then(response => response.json())
        .then(comments => dispatch(addComments(comments)))
}

export const addComments = (comments) => ({
    type: actionTypes.ADD_COMMENTSSSS,
    payload: comments
}) 

export const commentsFailed = (errmess) => ({
    type: actionTypes.COMMENTS_FAILED,
    payload: errmess
})

export const fetchPromos = () => (dispatch) => {
    dispatch(promosLoading())
    return fetch(baseUrl+"promotions")
        .then(response => response.json())
        .then(promos => dispatch(addPromos(promos)))
}

export const promosFailed = (errmess) => ({
    type: actionTypes.PROMOS_FAILED,
    payload: errmess
})

export const promosLoading = () =>({
    type: actionTypes.PROMOS_LOADING
})

export const addPromos = (promos) =>({
    type: actionTypes.ADD_PROMOS,
    payload: promos
})