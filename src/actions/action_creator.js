import {COMPARE_CODE, INPUT_CODE, RESET, SUCCESSFUL} from "./action_types";

export const inputCode = (payload) => ({type: INPUT_CODE, payload})
export const compareCode = (payload) => ({type: COMPARE_CODE, payload})
export const successfulGuess = () => ({type: SUCCESSFUL})
export const resetGame = () => ({type: RESET})


