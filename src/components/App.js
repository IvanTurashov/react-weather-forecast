/**
 * Created by ivan on 23.06.18.
 */

import React from 'react';
import { Switch, BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import Home from './Home';

const App = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Redirect from='*' to='/'/>
                </Switch>
            </div>
        </Router>
    );
};

export default App;