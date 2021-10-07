import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import PageRender from './PageRender'
import Header from './components/global/Header'
import Footer from './components/global/Footer'


const App = () => {
  return (
      <Router>
      <Header />
        <div className="container">
          <Switch>
            <Route exact path="/" component={PageRender} />
            <Route exact path="/:page" component={PageRender} />
            <Route exact path="/:page/:slug" component={PageRender} />
          </Switch>
        </div>
        <Footer/>
      </Router>  
  )
}

export default App