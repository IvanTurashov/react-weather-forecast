/**
 * Created by ivan on 23.06.18.
 */

import React, { lazy, Suspense } from 'react';
import { Switch, BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import GlobalLoader from './components/GlobalLoader.jsx';

const Home = lazy(() => import('./components/Home'));

const App = () => {
    return (
        <Router>
            <Suspense fallback={<GlobalLoader />}>
                <Switch>
                    <Route exact path="/" render={(props) => <Home {...props} />} />
                    <Redirect from='*' to='/' />
                </Switch>
            </Suspense>
        </Router>
    );
};

export default App;