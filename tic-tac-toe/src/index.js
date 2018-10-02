import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// Reducer
const counter = (state = { value: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { value: state.value + 1 };
    case 'DECREMENT':
      return { value: state.value - 1 };
    default:
      return state;
  }
}

class Counter extends React.Component {
  // State
  constructor() {
    super();
    this.state = counter(undefined, {});
  }

  dispatch(action) {
    this.setState(prevState => counter(prevState, action));
  }
  // Actions
  increment = () => {
    this.dispatch({ type: 'INCREMENT' });
  };

  decrement = () => {
    this.dispatch({ type: 'DECREMENT' });
  };

  render() {
    return (
      <div>
        {this.state.value}
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    )
  }
}
ReactDOM.render(<Counter />, document.getElementById('root'));
registerServiceWorker();
