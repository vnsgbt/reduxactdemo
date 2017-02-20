import { connect } from 'react-redux';
import CounterComponent from '../components/CounterComponent';
import { increment5, decrement5 } from '../actions'

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