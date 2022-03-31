import React, { useState } from 'react';


export default function Counter() {
    const [count, setCount] = useState(0);

    const updateCount = () => {
        setCount((prevCount) => prevCount + 1);
    }


    return (
        <div>
            <span className="counter">{count}</span>
            <button className="counter-button" onClick={updateCount}>Click!</button>
        </div>
    )
}
