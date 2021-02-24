import {CREATE_POST, FETCH_POSTS} from "../types";
import {TypePost} from "../../types/TypePost";
import {hideLoader, showLoader} from "./loader";
import {showAlert} from "./alert";

export function createPost(post: TypePost) {
    return {
        type: CREATE_POST,
        payload: post
    }
}

export const fetchPosts = () => async (dispatch: any) => {
    dispatch(showLoader());
    try {
        const res = await (await fetch("http://jsonplaceholder.typicode.com/posts")).json();
        dispatch({type: FETCH_POSTS, payload: res});
    } catch (e) {
        dispatch(showAlert(e.message));
    }
    dispatch(hideLoader());
};
