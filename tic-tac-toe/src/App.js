import React, { Component } from 'react';
import {connect} from 'react-redux'
import './App.css';
class Add extends Component{
  render(){
    let {dispatch}=this.props
    return (
      <div onClick={()=>dispatch({type:'CHANGE',value:10})}>
        {this.props.value}<br/>
        {this.props.ownProps}
      </div>
    )
  }
}
let NewAdd=connect((state,ownProps)=>{
  console.log(ownProps)
  return ({
    value:state.value,
    ownProps:'我改变了！'
  })
})(Add)
class App extends Component {
  state={
    num:1234
  }
  handleClick=()=>{
    console.log('1')
    this.setState({
      num:1
    })
  }
  render() {
    return (
      <div>
        <NewAdd propsOne={'我是propsOne,因为我在父组件里，我们可以在mapStateToProps里做些手脚，因为数据流要先流过wrapComponent'}/>
      </div>
    );
  }
}

export default App;
