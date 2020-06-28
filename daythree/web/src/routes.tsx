import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
//import CreatePoint from './pages/CreatePoint';

const Routes = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" />
    </BrowserRouter>
  );
};

export default Routes;
