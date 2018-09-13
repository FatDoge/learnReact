import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
class Clock extends Component{
  constructor(){
    super()
    console.log('Clock constructor')
    this.state={
      time:new Date()
    }
  }
  componentWillMount(){
    console.log('Clock will mount')
    this.timer=setInterval(()=>{this.setState({
      time:new Date()
    })},1000)
  }
  componentDidMount(){
    console.log('Clock did mount')
  }
  componentWillUnmount() {
    console.log('Clock will unmount')
    clearInterval(this.timer)
  }
  componentWillUpdate(){
    console.log('Clock will update')
  }
  componentDidUpdate(){
    console.log('Clock did update')
  }
  render(){
    return (
      <h1>{this.state.time.toLocaleString()}</h1>
    )
  }
}
class Index extends Component{
  constructor(){
    super()
    console.log('Index constructor')
    this.state={
      isDisplay:true
    }
  }
  componentWillMount(){
    console.log('Index will mount')
  }
  componentDidMount(){
    console.log('Index did mount')
  }
  
  handleDisplayChange(){
    this.setState({
      isDisplay:!this.state.isDisplay
    })
  }
  render(){
    return (
      <div>{
        this.state.isDisplay?<Clock/>:null
      }
      <button onClick={this.handleDisplayChange.bind(this)}>toggle</button>
      </div>
    )
  }
}
ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
