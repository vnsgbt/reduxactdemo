import React, { Component, PropTypes } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';

class App extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired 
  }

  componentWillMount() {
    this.props.store.dispatch({type:'INC'});
  }

  render() {
    return (
      <div className="App">

        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        <Counter
          value={this.props.store.getState().counterValue}
          onIncrement={() => this.props.store.dispatch({type:'INC'}) }
          onDecrement={() => this.props.store.dispatch({type:'DEC'}) }
        />

      </div>
    );
  }
}

export default App;
