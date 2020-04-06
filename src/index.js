import "./index.css"

import * as serviceWorker from "./serviceWorker"

import { Route, HashRouter as Router, Switch } from "react-router-dom"

import App from "./App"
import CV from "./pages/cv"
import React from "react"
import ReactDOM from "react-dom"

const RoutedApp = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <App />
      </Route>
      <Route path="/cv">
        <CV />
      </Route>
    </Switch>
  </Router>
)

ReactDOM.render(<RoutedApp />, document.getElementById("root"))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
