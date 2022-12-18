import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducers from './redux/reducers'
import rootSaga from './redux/sagas'

const postsMiddleware = createSagaMiddleware()

const middlewareEnhancer = applyMiddleware(postsMiddleware)

const store = createStore(reducers, middlewareEnhancer)
postsMiddleware.run(rootSaga)


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
