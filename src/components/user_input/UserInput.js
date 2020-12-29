import {memo, useRef} from 'react'

export const UserInput = memo(({onSubmitUserCode, user_version, onInputValue}) => {
    const input_ref = useRef(user_version)
    const onFormSubmit = (e) => {
        e.preventDefault()
        onSubmitUserCode(input_ref.current.value)
    }
    const handleInput = () => {
        const input = input_ref.current.value
        if (Number(input) && input.length <= 4) {
            onInputValue(input)
        }
    }
    return (
        <div>
            <form onSubmit={onFormSubmit}>
                <input type="number" onInput={handleInput} maxLength='4'
                       ref={input_ref} value={user_version}/>
                <button disabled={user_version.length !== 4}>Submit code</button>
            </form>
        </div>
    );
})
