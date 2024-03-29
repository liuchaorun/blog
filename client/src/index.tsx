import React from 'react'
import { render } from 'react-dom'
import Root from './root'
import configureStore from './store';
import * as serviceWorker from './serviceWorker';

const store = configureStore();

render(<Root store={store} />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
