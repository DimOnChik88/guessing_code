import {inputCode, resetGame, successfulGuess} from "./action_creator";
import {INPUT_CODE, RESET, SUCCESSFUL} from "./action_types";

it('should create action with type "SUCCESSFUL"', () => {
    let action = successfulGuess();
    expect(action.type === SUCCESSFUL).toBe(true)
});

it('should create action with type "RESET"', () => {
    let action = resetGame();
    expect(action.type === RESET).toBe(true)
});

it('should create action with type "INPUT_CODE" and payload equal input value', () => {
    let input = '8987'
    let action = inputCode(input);
    expect(action.type === INPUT_CODE && action.payload === input).toBe(true)
});

it('should create action with type "COMPARE_CODE" and payload equal input value', () => {
    let payload = [true, false, false, true]
    let action = inputCode(payload);
    expect(action.type === INPUT_CODE && action.payload === payload).toBe(true)
});
