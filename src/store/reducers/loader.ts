import {SHOW_LOADER, HIDE_LOADER} from "../types";

const initialState = {
    loader: false,
};

export const loader = (state = initialState, action: any) => {
    switch (action.type) {
        case SHOW_LOADER:
            return {...state, loader: true};
        case HIDE_LOADER:
            return {...state, loader: false};
        default:
            return state;
    }
};

export default loader;
