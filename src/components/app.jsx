import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import FeedList from './feed_list';

class App extends React.Component {
  render() {
    return(
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
