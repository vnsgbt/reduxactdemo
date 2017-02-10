
import React, { PropTypes } from 'react'

const TODO = ()=>{};

const CounterComponent = ({value, onIncrement, onDecrement,async}) => (
        <div>
            <p> Clicked: {value} times {' '} </p>
            <p>
                <button onClick={onIncrement}> + </button> {' '}
                <button onClick={onDecrement}> - </button>
                {
                    async &&
                    <span> {' '}
                        <button onClick={TODO}> Inc odd </button> {' '}
                        <button onClick={TODO}> Inc async </button>
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