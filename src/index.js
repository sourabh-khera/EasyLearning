import React from "react"
import {Provider} from "react-redux"
import {store} from "./client/store"
import App from "./client/app"
import {render} from "react-dom"
const app = document.getElementById('root');

render(
   //Provider needs to be added since store has not been made we will add it later.
        <App/>,app
);
