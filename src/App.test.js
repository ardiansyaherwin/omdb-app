import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Router } from "react-router-dom"
import { Provider } from "react-redux"
import store from "./stores"
import history from "./utils/history"

it ('renders wrapped in router without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Router history={history}>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div)
})