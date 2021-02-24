import {combineReducers} from "redux";
import posts from "./posts";
import loader from "./loader";
import alert from "./alert";

export default combineReducers({loader, alert, posts});
