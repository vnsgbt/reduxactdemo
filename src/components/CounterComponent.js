
import React, { PropTypes } from 'react'

const CounterComponent = ({ 
    value, 
    onIncrement, 
    onDecrement,
    async
}) => (
            <div>
                <p>
                    Clicked: {value} times
                    {' '}
                </p>
                <p>
                    <button onClick={onIncrement}>
                        +
                    </button>
                    {' '}
                    <button onClick={onDecrement}>
                        -
                    </button>
                    {async && 
                        <span>
                            {' '}
                            <button onClick={()=>{}}>
                                Increment if odd
                            </button>
                            {' '}
                            <button onClick={()=>{}}>
                                Increment async
                            </button>
                        </span>           
                    }
                </p>
            </div>
)

CounterComponent.propTypes = {
    value: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired
}

export default CounterComponent;