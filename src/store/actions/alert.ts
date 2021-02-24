import {HIDE_ALERT, SHOW_ALERT} from "../types";

export function showAlert(text: string) {
    return (dispatch: any) => {
        dispatch({
            type: SHOW_ALERT,
            payload: text
        });

        setTimeout(() => {
            dispatch(hideAlert())
        }, 5000)
    }

}

export function hideAlert() {
    return {
        type: HIDE_ALERT
    }
}
