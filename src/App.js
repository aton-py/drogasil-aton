import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Css from './Pages/Css';
import Home from './Pages/Home'
import Html from './Pages/Html';
import Javascript from './Pages/Javascript';
import ReactP from './Pages/React';
import Redux from './Pages/Redux';

const App = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/css3" exact component={Css} />
        <Route path="/javascript" exact component={Javascript} />
        <Route path="/react" exact component={ReactP} />
        <Route path="/redux" exact component={Redux} />
        <Route path="/html5" exact component={Html} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;