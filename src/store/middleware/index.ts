import {CREATE_POST} from "../types";
import {showAlert} from "../actions/alert";

const forbiddenWords = ['fuck', 'spam'];
export const forbiddenWordsMiddleware = ({dispatch}: any) => (next: any) => (action: any) => {
    if (action.type === CREATE_POST) {
        const found = forbiddenWords.filter(w => action.payload.title.includes(w));
        if(found.length){
            return dispatch(showAlert("Слово не подходит"))
        }
    }
    return next(action)
};
