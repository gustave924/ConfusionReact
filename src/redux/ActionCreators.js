import * as actionTypes from "./ActionTypes" ;
import {baseUrl} from "../shared/baseUrl";
import fetch from "cross-fetch";

export const addComment = (comment) => ({
    type: actionTypes.ADD_COMMENTS,
    payload:comment
})

export const postComment = (dishId, rating, author, comment) => (dispatch) =>{
    const newComment = {
        dishId:  dishId,
        rating:  rating,
        author:  author,
        comment: comment,
    }

    newComment.date = new Date().toISOString();

    return fetch(baseUrl+"comments",{
        method:"POST",
        body: JSON.stringify(newComment),
        headers:{
            "Content-type":"Application/json"
        },
        credentials: "same-origin"
    }).then(response => {
        if(response.ok){
            return response;
        }else{
            let error = new Error(`Error ${response.status} : ${response.statusText}`)
            error.response = response;
            throw error
        }
    }, error => {
        error = new Error(error.message);
        throw error;
    })
    .then(response => response.json())
    .then(response => dispatch(addComment(response)))
    .catch(error =>{ console.log('post comments', error.message); 
                    alert('Your comment could not be posted\nError: '+error.message); } )
}

export const fetchDishes = () => (dispatch) => {

    dispatch(dishesLoading(true));
    
    return fetch(baseUrl+"dishes")
        .then( response =>{
            if(response.ok){
                return response;
            }else{
                var error = new Error(`Error: ${response.status} : ${response.statusText}`);
            }
        }, error => {
            var errMess = new Error(error.message);
            throw errMess;
        })
        .then(response => response.json())
        .then(dishes => dispatch(addDishes(dishes)))
        .catch(error => dispatch(dishesFailed(error.message)))
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
        .then(response => {
            if(response.ok){
                return response;
            }else{
                var error = `Error ${response.status} : ${response.statusText}`;
            }
        }, error => {
            var errMess = new Error(error.message);
            throw errMess;
        })
        .then(response => response.json())
        .then(comments => dispatch(addComments(comments)))
        .catch(error => dispatch(commentsFailed(error.message)))
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
        .then(response => {
            if(response.ok){
                return response;
            }else{
                var error = new Error(`Error ${response.status} : ${response.statusText}`);
            }
        }, error => {
            var error = new Error(error.message);
            throw error;
        })
        .then(response => response.json())
        .then(promos => dispatch(addPromos(promos)))
        .catch(error => dispatch(promosFailed(error.message)));
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