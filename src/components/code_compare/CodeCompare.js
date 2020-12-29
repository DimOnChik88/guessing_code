import './code_compare.css';
import {memo} from 'react'

export const CodeCompare = memo(({compare_code}) => {
    return (
        <div className='flex column item_center'>
            <div className='flex column item_center position'>
                <h2>Guess conditions and rules</h2>
                <p>
                    Enter 4 digits and press 'Submit code'. If guess digit is right it will be green
                    <span className='round true'/> another way it will be red <span className='round false'/>
                </p>
                <div className='flex row'>
                    {compare_code.map((item, index) => (<div className={`round ${item.toString()}`} key={index}/>))}
                </div>
            </div>
        </div>
    );
})
