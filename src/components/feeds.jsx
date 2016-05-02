import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import FeedsContainer from '../containers/feeds_container';
import TopNav from './top_nav';

class Feeds extends React.Component {
  render() {
    return(
      <div>
        <header>
          <TopNav />
          <FeedsContainer />
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
