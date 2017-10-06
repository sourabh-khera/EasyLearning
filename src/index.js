import React from "react";
import { Provider } from 'react-redux';
import {render} from "react-dom";
import App from "./client/app";
import configureStore from './client/store/configureStore';
import reducers from './client/reducers';
const app = document.getElementById('root');

const store = configureStore(reducers);
render(
   <Provider store={store}>
     <App/>
   </Provider>,app
);
