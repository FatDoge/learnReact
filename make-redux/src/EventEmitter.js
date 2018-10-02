class EventEmitter{
  constructor(){
    this.listeners={}
  }
  on(eventName,func){
    if(!this.listeners[eventName]){
      this.listeners[eventName]=[].concat(func)
    }else{
      this.listeners[eventName].push(func)
    }
  }

  emit(eventName,...rest){
    if(this.listeners[eventName]){
      this.listeners[eventName].map(event=>{
        event(...rest)
      })
    }
  }
  off(eventName,func){
    if(this.listeners[eventName]){
      const index = this.listeners[eventName].indexOf(func)
      if(index!==-1){
        this.listeners[eventName].splice(index,1)
      }
    }
  }
}
const emitter = new EventEmitter()

const sayHi = (name) => console.log(`Hello ${name}`)
const sayHi2 = (name) => console.log(`Good night, ${name}`)

emitter.on('hi', sayHi)
emitter.on('hi', sayHi2)
console.log(emitter.listeners['hi'][0])
emitter.emit('hi', 'ScriptOJ')
// => Hello ScriptOJ
// => Good night, ScriptOJ

emitter.off('hi', sayHi)
emitter.emit('hi', 'ScriptOJ')
// => Good night, ScriptOJ

const emitter2 = new EventEmitter()
emitter2.on('hi', (name, age) => {
  console.log(`I am ${name}, and I am ${age} years old`)
})
emitter2.emit('hi', 'Jerry', 12)
// => I am Jerry, and I am 12 years old