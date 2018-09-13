import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
class Input extends Component {
  constructor(){
    super()
    this.state={
      number:''
    }
  }
  handleNumberChange(e) {
    this.setState({
      number: e.target.value
    })
    if(this.props.submit){
      this.props.submit(e.target.value)
    }
  }
  render () {
    return (
      <div>
        <input type='number' value={this.state.number} onChange={this.handleNumberChange.bind(this)}/>
      </div>
    )
  }
}

class PercentageShower extends Component {
  render () {
    return (
      <div>{this.props.result?(this.props.result*100).toFixed(2)+'%':null}</div>
    )
  }
}

class PercentageApp extends Component {
  constructor(){
    super()
    this.state={
      number:''
    }
  }
  handleInputNumber(number){
    this.setState({
      number:number
    })
  }
  render () {
    return (
      <div>
        <Input submit={this.handleInputNumber.bind(this)}/>
        <PercentageShower result={this.state.number}/>
      </div>
    )
  }
}
ReactDOM.render(<PercentageApp />, document.getElementById('root'));
registerServiceWorker();
