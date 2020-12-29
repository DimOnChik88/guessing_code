import {COMPARE_CODE, INPUT_CODE, RESET, SUBMIT_USER_CODE, SUCCESSFUL} from "../../actions/action_types";

const initial_value = {
    code: (Math.floor(Math.random() * (9999 - 1000)) + 1000).toString(),
    user_version: '',
    compare_code: [],
    successful: false
}

export const reducer = (state = initial_value, action) => {
    switch (action.type) {
        case SUBMIT_USER_CODE: return {...state, user_version: action.payload};
        case INPUT_CODE: return {...state, user_version: action.payload}
        case COMPARE_CODE: return {...state, compare_code: action.payload}
        case SUCCESSFUL: return {...state, successful: true}
        case RESET: return {...initial_value,  code: (Math.floor(Math.random() * (9999 - 1000)) + 1000).toString()}

        default: return state;
    }
}
