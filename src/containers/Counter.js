import { connect } from 'react-redux';
import CounterComponent from '../components/CounterComponent';
import { increment, decrement } from '../actions';

const mapState = (state) => ({
    value: state.counterValue,
    async: true
}); 

const mapDispatch = ({
    onIncrement: increment,
    onDecrement: decrement,
});

const Counter = connect(
    mapState, mapDispatch
)(CounterComponent);

export default Counter;