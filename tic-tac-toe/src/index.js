import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore} from 'redux'
import {Provider} from 'react-redux'
// Reducer
// const counter = (state = { value: 0 }, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return { value: state.value + 1 };
//     case 'DECREMENT':
//       return { value: state.value - 1 };
//     default:
//       return state;
//   }
// }

// class Counter extends React.Component {
//   // State
//   constructor() {
//     super();
//     this.state = counter(undefined, {});
//   }

//   dispatch(action) {
//     this.setState(prevState => counter(prevState, action));
//   }
//   // Actions
//   increment = () => {
//     this.dispatch({ type: 'INCREMENT' });
//   };

//   decrement = () => {
//     this.dispatch({ type: 'DECREMENT' });
//   };

//   render() {
//     return (
//       <div>
//         {this.state.value}
//         <button onClick={this.increment}>+</button>
//         <button onClick={this.decrement}>-</button>
//       </div>
//     )
//   }
// }
const counter = (state = {
    value: 0
  }, action) => {
      switch (action.type) {
        case 'CHANGE':
          return { value: action.value };
        case 'DECREMENT':
          return { value: state.value - 1 };
        default:
          return state;
      }
    }
let store=createStore(counter)
ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>, document.getElementById('root'));
registerServiceWorker();
