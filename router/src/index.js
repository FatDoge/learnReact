import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Link } from 'react-router-dom'
const BasicExample=()=>(
  <BrowserRouter>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/topics">Topics</Link></li>
      </ul>
      <hr/>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/topics" component={Topics}/>

    </div>
  </BrowserRouter>
)
const Home=()=>(
  <div>
    <h2>Home</h2>
  </div>
)
const About=()=>(
  <div>
    <h2>About</h2>
  </div>
)
const Topics=({match})=>(
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Component
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-vs-state`}>
          Props-vs-State
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={()=>(
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)

const Topic=({match})=>(
  <div>
    <h3>{match.params.topicId}</h3>
    <p>some contents.</p>
  </div>
)
ReactDOM.render(<BasicExample />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
