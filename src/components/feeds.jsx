import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import FeedList from './feed_list';

class Feeds extends React.Component {
  render() {
    return(
      <div>
        <FeedList />
        <div className="container">
          <div className="col m12">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default Feeds;
