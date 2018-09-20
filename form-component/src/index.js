import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
class FormApp extends Component{
  constructor(){
    super()
    this.state={
      formTypes:[1,2,3,4],
      formType:2
    }
  }
  handleChangeFormType(e){
    this.setState({
      formType:e.target.value
    })
  }
  render(){
    return(
      <div>
        <FormSelect types={this.state.formTypes} value={this.state.formType} handleChangeFormType={this.handleChangeFormType.bind(this)}/>
        <Form type={this.state.formType}/>
      </div>
    )
  }
}
class FormSelect extends Component{
  handleSelectForm(e){
    console.log(e.target.value)
    if(this.props.handleChangeFormType){
      this.props.handleChangeFormType(e)
    }
  }
  render(){
    return(
      <select onChange={this.handleSelectForm.bind(this)} value={this.props.value}>
        {this.props.types.map((item,index)=>{
          return <option value ={item} key={index}>{item}</option>
        })}
      </select>
    )
  }
}
class Form extends Component{
  render(){
    const diffFormElements={
    1:[<p>type1-0</p>,<p>type1-1</p>],
    2:[<p>type2</p>],
    3:[null,<p>type3</p>],
      4:[<p>type4</p>]
    }
    return(
      <div>
        <form type={this.props.type}>
          <p>First name: <input type="text" name="fname" /></p>
          {diffFormElements[this.props.type][0]||null}
          <p>Last name: <input type="text" name="lname" /></p>
          {diffFormElements[this.props.type][1]||null}
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}
ReactDOM.render(<FormApp />, document.querySelector('#root'));
registerServiceWorker();
