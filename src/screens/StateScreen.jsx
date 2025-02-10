import React from 'react'

import { useState } from 'react'

const StateScreen = () => {
    const [Count, setCount] = useState(0)
    return (
        <>
            <div>
                <h1>We are learning about state</h1>

            </div>
            <div>
                <button onClick={() => {
                    setCount(Count + 1)
                }}>
                    Add
                </button>
            </div>
            <div>
                <button onClick={() => {
                    setCount(Count - 1)
                }}>
                    Substract
                </button>
            </div>

            <div>
                <h3>Count us : {Count}</h3>

            </div>
        </>
    )
}

export default StateScreen