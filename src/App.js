/**
 * Created by ivan on 23.06.18.
 */

import React, { lazy, Suspense } from 'react';
import { Switch, BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { injectGlobal } from 'emotion';
import GlobalLoader from './components/GlobalLoader.jsx';

const Home = lazy(() => import('./components/Home'));

injectGlobal`
  * {
    outline: none;
  }

  html {
    font-size: 14px;
    font-family: 'Poppins', sans-serif;
    color: #151515;
  }
  
  body {
      margin: 0;
      background-color: #fff;
  }
`;

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