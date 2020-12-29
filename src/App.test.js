import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import App from "./App";
import {UserInput} from "./components/user_input/UserInput";

let container = null;
beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container)
})

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
})

it('should render UserInput component', () => {
    act(() => {
        render(<UserInput />, container)
    })
})


