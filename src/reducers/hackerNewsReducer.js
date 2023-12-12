import axios from "axios";
import { configureStore } from "@reduxjs/toolkit";


//SET THE STATE
const initialState = {
    loading: false,
    article: []
};

const REQUEST_ARTICLES = 'REQUEST_ARTICLES';
const PENDING = 'PENDING';

//THUNK
export const requestArticles = async (dispatch) => {
    dispatch ({ type: PENDING})
    const articles = await axios.get ('/api/hacker-news').then(res => res.data);
    console.log(articles);
    console.log("hackerNewsline40")
    dispatch({type: REQUEST_ARTICLES, payload: articles})
};

//CREATE THE REDUCER
export default function hackerNewsReducer (state=initialState, action){
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
            console.log(action.payload)
            return articlesState

            default:
            return state
    }
}















