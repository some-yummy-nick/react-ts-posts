import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension/developmentOnly";

import reducer from "./reducers";
import {forbiddenWordsMiddleware} from "./middleware";

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk,forbiddenWordsMiddleware)));
export default store;
