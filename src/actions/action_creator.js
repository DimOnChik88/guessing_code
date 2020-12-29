import {COMPARE_CODE, INPUT_CODE, RESET, SET_USER_VERSION, SUCCESSFUL} from "./action_types";

export const setUserVersion = (payload) => ({type: SET_USER_VERSION, payload});
export const inputCode = (payload) => ({type: INPUT_CODE, payload})
export const compareCode = (payload) => ({type: COMPARE_CODE, payload})
export const successfulGuess = () => ({type: SUCCESSFUL})
export const resetGame = () => ({type: RESET})


