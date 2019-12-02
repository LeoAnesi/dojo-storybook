import React from 'react';

import { Router } from 'react-router-dom';
import { History } from 'history';
import { Route } from 'react-router';

import Root from './components/Root';
import Routes, { PATHS } from './routes';

interface Props {
  history: History;
}

const RootComponentWithRoutes: React.FunctionComponent = () => (
  <Root>
    <Routes />
  </Root>
);

const App: React.FunctionComponent<Props> = ({ history }) => (
  <Router history={history}>
    <Route path={PATHS.HOME} component={RootComponentWithRoutes} />
  </Router>
);

export default App;
