import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import rootReducer from "./root-reducer";
import {fetchImage} from "./apod/apod.actions"

const middlewares = [logger,thunk];

const store = createStore(rootReducer, applyMiddleware(...middlewares))
//store.subscribe(() => { console.log(store.getState())})

export default store;