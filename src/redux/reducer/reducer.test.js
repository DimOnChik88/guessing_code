import {reducer} from "./index";
import {compareCode, inputCode, resetGame, successfulGuess} from "../../actions/action_creator";

const initial_value = {
    code: (Math.floor(Math.random() * (9999 - 1000)) + 1000).toString(),
    user_version: '',
    compare_code: [],
    successful: false
}

it('user input should be added and it\'s length should be 4', () => {
    const input = '5848'
    let action = inputCode(input);
    let newState = reducer(initial_value, action);
    expect(newState.user_version.length).toBe(4);
    expect(newState.user_version).toBe(input)
})

it('should create array in state', () => {
    let payload = [true, false, false, true]
    let action = compareCode(payload);
    let newState = reducer(initial_value, action);
    expect(newState.compare_code).toBe(payload);
});

it('should change successful field from false to true', () => {
    let action = successfulGuess();
    let newState = reducer(initial_value, action);
    expect(newState.successful).toBe(true);
});

it('should reset state with new code and empty other fields', () => {
    let action = resetGame();
    let newState = reducer(initial_value, action);
    expect(newState.code === initial_value.code).toBe(false);
    expect(newState.compare_code.length === 0 && newState.user_version === '' && newState.successful === false).toBe(true)
});
