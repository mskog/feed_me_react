import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import FeedList from './feed_list';
import TopNav from './top_nav';

class Feeds extends React.Component {
  render() {
    return(
      <div>
        <header>
          <TopNav />
          <FeedList />
        </header>
        <main>
          <div className="container">
            {this.props.children}
          </div>
        </main>
      </div>
    );
  }
}

export default Feeds;
