import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import FeedList from './feed_list';

class Feeds extends React.Component {
  render() {
    return(
      <div>
        <header>
          <FeedList />
        </header>
        <main>
          <div className="container">
            <div className="row">
              <div className="col l12">
                {this.props.children}
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Feeds;
