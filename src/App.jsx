/**
 * Created by ivan on 23.06.18.
 */

import React, { Fragment, Suspense } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { injectGlobal } from 'emotion';
import styled from 'react-emotion';
import routes from './routes';

import { GlobalLoader } from './components/Loaders.jsx';
import Nav from './components/Nav.jsx';

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

const App = (props) => {
    const { pathname } = props.location;

    return (
        <Fragment>
            {pathname !== '/' && <Nav />}

            <Suspense fallback={<GlobalLoader />}>
                <Switch>
                    {routes.map(({ path, component: Component, ...props }) => {
                        return <Route
                            key={path}
                            path={path}
                            render={props => <Component {...props} />}
                            {...props}
                        />
                    })}

                    <Redirect from='*' to='/' />
                </Switch>
            </Suspense>
        </Fragment>
    );
};

export default withRouter(App);