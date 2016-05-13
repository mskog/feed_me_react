import React from 'react';
import { Route, IndexRoute } from 'react-router';
import FeedsContainer from './containers/feeds_container';
import FeedContainer from './containers/feed_container';
import AddFeed from './components/add_feed';

import App from './components/app';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={FeedsContainer} />
    <Route path="feeds" component={FeedsContainer}>
      <Route path="new" component={AddFeed} />
      <Route path=":id" component={FeedContainer} />
    </Route>
  </Route>
);
