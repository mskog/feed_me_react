import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Feeds from './components/feeds';
import Feed from './components/feed';

import App from './components/app';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Feeds} />
    <Route path="feeds" component={Feeds}>
      <Route path=":id" component={Feed} />
    </Route>
  </Route>
);
