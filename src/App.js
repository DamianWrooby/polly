import React from 'react';
import './App.css';
import Layout from './hoc/Layout';
import Front from './containers/Front/Front';
import Results from './containers/Results/Results';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" exact component={Front} />
          <Route path="/search" component={Results} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
