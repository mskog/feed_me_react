import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import FeedList from './feed_list';

class App extends React.Component {
  render() {
    return(
      <div className="row">
        <div className="col-md-6">
          <FeedList />
        </div>
      </div>
    );
  }
}

export default App;
