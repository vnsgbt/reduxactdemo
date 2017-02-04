import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';

class App extends Component {
  static propTypes = {
    unit: React.PropTypes.number,
  }

  constructor(props) {
    super(props);
    this.state = { counterValue: 0 };
  }

  componentWillMount() {
    this.setState({ counterValue: this.state.counterValue + this.props.unit });
  }

  render() {
    return (
      <div className="App">

        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        <Counter value={this.state.counterValue} />

      </div>
    );
  }
}

export default App;
