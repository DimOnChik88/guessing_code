export const Successful = ({onReset}) => {
    return (
        <div className='flex column item_center'>
            <div className='congratulation'/>
            <div className='flex column item_center reset_block'>
                <p><strong>CONGRATULATION!</strong></p>
                <p>You are the best guesser in the world</p>
                <button onClick={() => onReset()}>Yes I am</button>
            </div>
        </div>
     );
}
