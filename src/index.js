import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';

import PageTemplate from './PageTemplate';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import './index.css';

const page3 = () => <p>Page 3</p>;

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={PageTemplate}>
      <Route path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/3" component={page3} />
    </Route>
  </Router>,
  document.getElementById('root')
);
