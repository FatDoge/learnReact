function createStore(reducer){
  let state=null
  const listeners=[]
  const subscribe=(listener)=>listeners.push(listener)
  const getState=()=>state
  const dispatch=(action)=>{
    state=reducer(state,action)
    listeners.forEach((listener)=>listener())
  }
  dispatch({})
  return {getState,dispatch,subscribe}
}
function reducer(state,action){
  if(!state){
    state = {
      title: {
        text: 'React.js 小书',
        color: 'red',
      },
      content: {
        text: 'React.js 小书内容',
        color: 'blue'
      }
    }
  }
  switch (action.type) {
    case 'UPDATE_TITLE_TEXT':
      return {
        ...state,
        title:{
          ...state.title,
          text:action.text
        }
      }
    case 'UPDATE_TITLE_COLOR':
      return {
        ...state,
        title:{
          ...state.title,
          color:action.color
        }
      }
    default:
    return state
  }
}
function themeReducer(state,action){
  if(!state)return{
    themeName:'Red Theme',
    themeColor:'red'
  }
  switch(action.type){
    case 'UPDATE_THEME_NAME':
      return{...state,themeName:action.themeName}
    case 'UPDATE_THEME_COLOR':
      return{...state,themeColor:action.themeColor}
    default:
    return state
  }
}
function renderApp(newAppState,oldAppState={}){
  if(newAppState===oldAppState)return
  console.log('app render...')
  renderTitle(newAppState.title,oldAppState.title)
  renderContent(newAppState.content,oldAppState.content)
}
function renderTitle(newTitle, oldTitle = {}) {
  if(newTitle===oldTitle)return
  console.log('title render...')
  const titleDOM=document.querySelector('#title')
  titleDOM.innerHTML=newTitle.text
  titleDOM.style.color=newTitle.color
}
function renderContent(newContent, oldContent = {}) {
  if(newContent===oldContent)return
  console.log('content render...')
  const contentDOM=document.querySelector('#content')
  contentDOM.innerHTML=newContent.text
  contentDOM.style.color=newContent.color
}

const store=createStore(reducer)
let oldAppState=store.getState()
store.subscribe(()=>{
  const newAppState=store.getState()
  renderApp(newAppState,oldAppState)
  oldAppState=newAppState
})
const themeStore=createStore(themeReducer)

renderApp(store.getState()) // 首次渲染页面
store.dispatch({ type: 'UPDATE_TITLE_TEXT', text: '《React.js 小书》' }) // 修改标题文本
store.dispatch({ type: 'UPDATE_TITLE_COLOR', color: 'blue' }) // 修改标题颜色
