import { configureStore } from "@reduxjs/toolkit";
import hackerreducer from './reducers/hackerNewsReducer.js';
import mediumreducer from './reducers/mediumReducer.js';
import hackerNewsReducer from "./reducers/hackerNewsReducer.js";
import mediumReducer from "./reducers/mediumReducer.js";
import redditReducer from "./reducers/redditReducer.js";


const store = configureStore({
    reducer: {
        hackerNews:hackerNewsReducer,
        medium: mediumReducer,
        reddit: redditReducer
    }
})

export default store