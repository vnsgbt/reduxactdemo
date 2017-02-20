import { connect } from 'react-redux';
import CounterComponent from '../components/CounterComponent';
import { increment, decrement, incrAs, incrOdd } from '../actions';

const mapState = (state) => ({
    value: state.counterValue,
    async: true
}); 

const mapDispatch = ({
    onIncrement: increment,
    onDecrement: decrement,
    onIncrOdd: incrOdd,
    onIncrAsync: incrAs
});

const Counter = connect(
    mapState, mapDispatch
)(CounterComponent);

export default Counter;