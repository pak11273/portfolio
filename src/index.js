import React from "react"
import { Route, Switch, HashRouter as Router } from "react-router-dom"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import CV from "./pages/cv"
import * as serviceWorker from "./serviceWorker"

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
