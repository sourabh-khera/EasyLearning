import React from "react"
import {Provider} from "react-redux"
import {store} from "./client/store"
import App from "./client/app"
const app = document.getElementById('root');

render(
    <Provider store={store}>
        <App/>
    </Provider>,app
);
