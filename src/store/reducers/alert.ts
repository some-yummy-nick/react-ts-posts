import {SHOW_ALERT, HIDE_ALERT} from "../types";

const initialState = {
    alert: null
};

export const alert = (state = initialState, action: any) => {
    switch (action.type) {
        case SHOW_ALERT:
            return {...state, alert: action.payload};
        case HIDE_ALERT:
            return {...state, alert: null};
        default:
            return state;
    }
};

export default alert;
