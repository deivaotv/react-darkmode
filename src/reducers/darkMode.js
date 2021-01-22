import { DARKMODE_UPDATE } from '../actions';

const initialState = {
    color: "#fff",
    textColor: "#000",
    checked: false,
};

export const darkMode = (state = initialState, action) => {
    switch (action.type) {
        case DARKMODE_UPDATE:
            return {
                ...state,
                checked: action.checked,
            };
        default:
            return state;
    }
};