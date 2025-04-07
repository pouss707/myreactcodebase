import React, { useState } from 'react';

function Calculator() {
    const [num, setNum] = useState(0)

    return (
        <div className='calculator'>
            <h1>{num}</h1>
            <button type='submit' onClick={() => { setNum(num + 1) }}>+</button>
            <button type='submit' onClick={() => { num > 0 ? (setNum(num - 1)) : (0) }}>-</button>
        </div>
    )
}

export default Calculator