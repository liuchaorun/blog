import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { AppState } from './store'

interface rootState {
    store: AppState
}

const Root : React.FC<rootState> = ({ store }) => (
    <Provider store={ store }>
        <Router>
            <Route path="/:filter?" component={} />
        </Router>
    </Provider>
);

export default Root
