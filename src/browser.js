import 'babel-polyfill'
import {Router, Route, browserHistory, IndexRoute} from 'react-router'
import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import App from './index'

import Home from './containers/Home'
import Gallery from './containers/Gallery'
import Flavours from './containers/Flavours'
import Reviews from './containers/Reviews'
import Contact from './containers/Contact'
import NotFound from './containers/NotFound'

// import Download from './containers/Download'
// import Story from './containers/Story'
// import Model from './containers/Model'
// import Intro from './containers/Intro'
// import Briefing from './containers/Briefaaing'
// import Events from './containers/Events'

import store from './reducers'
import {syncHistoryWithStore} from 'react-router-redux'

// import Promise from 'promise-polyfill';

const history = syncHistoryWithStore(browserHistory, store)

// To add to window
if (!window.Promise) {
  window.Promise = Promise;
}
localStorage.clear();
render((<Provider store={store}>
  <Router history={history} onUpdate={() => {
      window.scrollTo(0, 0)
    }}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}></IndexRoute>
      <Route path="/gallery" component={Gallery}></Route>
      <Route path="/flavours" component={Flavours}></Route>
      <Route path="/reviews" component={Reviews}></Route>
      <Route path="/contact" component={Contact}></Route>
      <Route path="*" component={NotFound}></Route>
      {/*
      <Route path="/events" component={Events}></Route>
      <Route path="/story" component={Story}></Route>
      <Route path="/model" component={Model}></Route>
      <Route path="/westminster-briefing" component={Briefing}></Route>
      <Route path="/six-month-introduction" component={Intro}></Route>
      */
      }
    </Route>
  </Router>
</Provider>), document.getElementById("app"));
