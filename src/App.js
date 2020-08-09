import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Results from './containers/Results/Results';
import FrontMap from './containers/FrontMap/FrontMap';
import NotFound from './components/NotFound/NotFound';
import About from './components/About/About';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/polly" exact component={FrontMap} />
          <Route path="/location" component={Results} />
          <Route path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
