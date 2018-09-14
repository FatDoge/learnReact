import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PropTypes from 'prop-types';
import registerServiceWorker from './registerServiceWorker';
class Index extends Component{
  constructor(props){
    super(props)
    this.state={
      themeColor:'red'
    }
  }
  static childContextTypes={
    themeColor:PropTypes.string
  }
  getChildContext(){
    return {
      themeColor:this.state.themeColor
    }
  }
  render(){
    return(
      <div>
        <Header/>
        <Main/>
      </div>
    )
  }
}
class Header extends Component{
  render(){
    return (
      <div>
        <p>this is title.</p>
        <Title/>
      </div>
    )
  }
}
class Title extends Component{
  static contextTypes={
    themeColor:PropTypes.string
  }
  render(){
    return (
        <h1 style={{color:this.context.themeColor}}>React小书 标题</h1>
    )
  }
}
class Main extends Component{
  render(){
    return (
      <div>
        <p>this is main</p>
        <Content/>
      </div>
    )
  }
}
class Content extends Component{
  render(){
    return(
        <h2>this is content.</h2>
    )
  }
}
ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
