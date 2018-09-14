import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import registerServiceWorker from './registerServiceWorker';
// class Clock extends Component{
//   constructor(){
//     super()
//     console.log('Clock constructor')
//     this.state={
//       time:new Date()
//     }
//   }
//   componentWillMount(){
//     console.log('Clock will mount')
//     this.timer=setInterval(()=>{this.setState({
//       time:new Date()
//     })},1000)
//   }
//   componentDidMount(){
//     console.log('Clock did mount')
//   }
//   componentWillUnmount() {
//     console.log('Clock will unmount')
//     clearInterval(this.timer)
//   }
//   componentWillUpdate(){
//     console.log('Clock will update')
//   }
//   componentDidUpdate(){
//     console.log('Clock did update')
//   }
//   render(){
//     return (
//       <h1>{this.state.time.toLocaleString()}</h1>
//     )
//   }
// }
// class Index extends Component{
//   constructor(){
//     super()
//     console.log('Index constructor')
//     this.state={
//       isDisplay:true
//     }
//   }
//   componentWillMount(){
//     console.log('Index will mount')
//   }
//   componentDidMount(){
//     console.log('Index did mount')
//   }
  
//   handleDisplayChange(){
//     this.setState({
//       isDisplay:!this.state.isDisplay
//     })
//   }
//   render(){
//     return (
//       <div>{
//         this.state.isDisplay?<Clock/>:null
//       }
//       <button onClick={this.handleDisplayChange.bind(this)}>toggle</button>
//       </div>
//     )
//   }
// }
// class AutoFocusInput extends Component {
//   componentDidMount() {
//     console.log(this.input)
//     this.input.focus()
//   }

//   render() {
//     return (
//       <div>
//         <input ref={(input) => {
//           console.log(input)
//           this.input = input
//         }} />
//         <input/>
//       </div>
//     )
//   }
// }
// class Post extends Component {
//   handleClick(){
//     console.log(this.p.clientHeight)
//   }
//   render () {
//     return (<p onClick={this.handleClick.bind(this)} ref={(p)=>this.p=p}>{this.props.content}</p>)
//   }
// }
// class Container extends Component{
//   render(){
//     return (<div>
//       <Post content='this is a post test'/>
//     </div>)
//   }
// }
// class BlackBorderContainer extends Component{
//   render(){
//     console.log(this.props.children)
//     return (<div>{
//       this.props.children.map(item=>{
//         return <div className="el-border">{item}</div>
//       })
//     }</div>)
//   }
// }
// ReactDOM.render(
//   <BlackBorderContainer>
//     <div className='name'>My Name：Lucy</div>
//     <p className='age'>
//       My Age：<span>12</span>
//     </p>
//   </BlackBorderContainer>,
//   document.getElementById('root')
// )
const getDefaultStyledPost=(styleObj)=>{
  class Post extends Component{
    constructor(){
      super()
      this.state={
        style:styleObj
      }
    }
    componentWillMount(){
      if(this.props.style){
        for(let key in this.props.style){
          this.state.style[key]=this.props.style[key]
        }
        this.setState({
          style:this.state.style
        })
      }
    }
    render(){
      return (
        <p style={this.state.style}>任意内容</p>
      )
    }
  }
  return Post
}
const Post=getDefaultStyledPost({color:'red'})
ReactDOM.render(<Post style={{ color: 'blue', fontSize: '13px' }} />, document.getElementById('root'));
registerServiceWorker();
