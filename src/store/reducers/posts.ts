import {CREATE_POST, FETCH_POSTS} from "../types";

const initialState = {
    posts: [{id: 1, title: "some"}],
    fetchedPosts: []
};

export const posts = (state = initialState, action: any) => {
    switch (action.type) {
        case CREATE_POST:
            return {...state, posts: [...state.posts, action.payload]};
        case FETCH_POSTS:
            return {...state, fetchedPosts: action.payload};
        default:
            return state;
    }
};

export default posts;
