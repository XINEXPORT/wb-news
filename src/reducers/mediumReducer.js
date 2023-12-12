import axios from "axios";
import { configureStore } from "@reduxjs/toolkit";

//SET THE STATE
let initialState = {
    loading: true,
    article: []
};

const REQUEST_ARTICLES = 'REQUEST_ARTICLES';
const PENDING = 'PENDING';

//THUNK
export const requestArticles = async (dispatch) => {
    dispatch ({ type: PENDING})
    const articles = await axios.get ('/api/medium').then (res => res.data);
    console.log(articles)
    dispatch ({type: REQUEST_ARTICLES, payload: articles})
};


//CREATE THE REDUCER
export default function mediumReducer (state=initialState, action){
    switch(action.type){
        case "PENDING":
            let pendingState = {
                loading: true,
                article:[]
            }
            return pendingState

        case "REQUEST_ARTICLES":
            let articlesState = {
                loading: false,
                article: action.payload
            }
            return articlesState

            default:
            return state
    }
}


