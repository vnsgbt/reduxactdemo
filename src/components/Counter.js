import React, { Component, PropTypes } from 'react'

class Counter extends Component {
    static propTypes = {
        value: PropTypes.number.isRequired,
        onIncrement: PropTypes.func.isRequired,
        onDecrement: PropTypes.func.isRequired
    }

    incrementIfOdd = () => {
        if (this.props.value % 2 !== 0) {
            this.props.onIncrement()
        }
    }

    incrementAsync = () => {
        setTimeout(this.props.onIncrement, 1000)
    }

    render() {
        return (
            <div>
                <p>
                    Clicked: {this.props.value} times
                {' '}
                </p>
                <p>
                    <button onClick={this.props.onIncrement}>
                        +
                </button>
                    {' '}
                    <button onClick={this.props.onDecrement}>
                        -
                </button>
                    {' '}
                    <button onClick={this.incrementIfOdd}>
                        Increment if odd
                </button>
                    {' '}
                    <button onClick={this.incrementAsync}>
                        Increment async
                </button>
                </p>
            </div>
        )
    }
}

export default Counter