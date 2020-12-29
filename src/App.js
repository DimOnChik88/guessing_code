import './App.css';
import {UserInput} from "./components/user_input/UserInput";
import {useDispatch, useSelector} from "react-redux";
import {compareCode, inputCode, resetGame, successfulGuess} from "./actions/action_creator";
import {CodeCompare} from "./components/code_compare/CodeCompare";
import {Successful} from "./components/successful/Successful";

function App() {
    const code = useSelector(({code}) => code);
    const user_version = useSelector(({user_version}) => user_version);
    let compare_code = useSelector(({compare_code}) => compare_code);
    const successful = useSelector(({successful}) => successful);
    const dispatch = useDispatch();

    const onSubmitUserCode = (value) => {
        compare_code = [];
        for (let i = 0; i < value.length; i++) {
           code[i] === value[i] ? compare_code.push(true) : compare_code.push(false)
        }
        dispatch(compareCode(compare_code))
        if(code === value) {
            dispatch(successfulGuess())
        }
    }
    const onInputValue = (value) => {
        dispatch(inputCode(value))
    }
    const onReset = () => {
        dispatch(resetGame())
    }

    return (
        <div className="flex column item_center">
            <CodeCompare compare_code={compare_code}/>
            <h2>Input code here: </h2>
            <UserInput onSubmitUserCode={onSubmitUserCode} user_version={user_version} onInputValue={onInputValue}/>
            {successful && <Successful onReset={onReset}/>}
        </div>
    );
}

export default App;
