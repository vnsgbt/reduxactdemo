import React, { Component, PropTypes } from 'react'

class Counter extends Component {
    static propTypes = {
        value: PropTypes.number.isRequired
    }

    render() {
        const { value } = this.props
        
        return (
            <p>
                Clicked: {value} times
                {' '}
                <button>
                    +
                </button>
                {' '}
                <button>
                    -
                </button>
                {' '}
                <button>
                    Increment if odd
                </button>
                {' '}
                <button>
                    Increment async
                </button>
            </p>
        )
    }
}

export default Counter