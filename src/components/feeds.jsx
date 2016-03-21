import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import FeedList from './feed_list';

class Feeds extends React.Component {
  render() {
    return(
      <div className="row">
        <div className="col-md-3">
          <div className="box">
            <FeedList />
          </div>
        </div>
        <div className="col-md-9">
          <div className="box">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default Feeds;
