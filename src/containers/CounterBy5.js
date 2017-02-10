import { connect } from 'react-redux';
import CounterComponent from '../components/CounterComponent';
import { increment5, decrement5 } from '../actions'

/*class Counter extends Component {

    incrementIfOdd = () => {
        if (this.props.value % 2 !== 0) {
            this.props.onIncrement()
        }
    }

    incrementAsync = () => {
        setTimeout(this.props.onIncrement, 1000)
    }
}*/

const mapState = (state) => ({
    value: state.counterValue5 
}) 

const mapDispatch = ({
    onIncrement: increment5,
    onDecrement: decrement5
})

const CounterBy5 = connect(
    mapState, mapDispatch
)(CounterComponent)

export default CounterBy5