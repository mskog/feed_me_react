import React, { PropTypes } from 'react';

class TopNav extends React.Component {
  render() {
    return(
      <nav className="top-nav">
        <div className="container">
          <div className="nav-wrapper">
            <a className="page-title">FeedMe</a>
          </div>
        </div>
      </nav>
    )
  }
}

export default TopNav;
