import React, {Component} from "react";
import Login from "./container/login";
import {BrowserRouter as Router, Route} from "react-router-dom"
export default class App extends Component {
    render() {
        return (
        <Router>
            <div>
              <Route exact path="/" component={Login}/>
            </div>
        </Router>
        )
    }
}
