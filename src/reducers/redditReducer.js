import axios from "axios";
import { configureStore } from "@reduxjs/toolkit";

//SET THE STATE
let initialState = {
    loading: false,
    article: []
};

const REQUEST_ARTICLES = 'REQUEST_ARTICLES';
const PENDING = 'PENDING';

//THUNK
export const requestArticles = async (dispatch) => {
    dispatch ({ type: PENDING})
    const articles = await axios.get ('/api/reddit').then (res => res.data);
    dispatch ({type: REQUEST_ARTICLES, payload: articles})
};


//CREATE THE REDUCER
export default function redditReducer (state=initialState, action){
    switch(action.type){
        case PENDING:
            let pendingState = {
                loading: true,
                article: []
            }
            return pendingState

        case REQUEST_ARTICLES:
            let articlesState = {
                loading: false,
                article: action.payload
            }
            return articlesState

            default:
            return state
    }
}

