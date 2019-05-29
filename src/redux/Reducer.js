import {DISHES} from "../shared/dishes";
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';

export const initalState = {
    dishes : DISHES,
    comments: COMMENTS,
    promotions: PROMOTIONS,
    leaders: LEADERS,
    detailsDish: null,
    selectedDishId: null
}

export const mainReducer = ( state = initalState , action) => {
    return state;
}