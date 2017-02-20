
import React, { PropTypes } from 'react'

const CounterComponent = ({
    value, 
    onIncrement, 
    onDecrement, 
    async,
    onIncrOdd,
    onIncrAsync
}) => (
        <div>
            <p> Clicked: {value} times {' '} </p>
            <p>
                <button onClick={onIncrement}> + </button> {' '}
                <button onClick={onDecrement}> - </button>
                {
                    async &&
                    <span> {' '}
                        <button onClick={onIncrOdd}> Inc odd </button> {' '}
                        <button onClick={onIncrAsync}> Inc async </button>
                    </span>
                }
            </p>
        </div>
);

CounterComponent.propTypes = {
    value: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired
}

export default CounterComponent;