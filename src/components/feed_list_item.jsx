import React, { PropTypes } from 'react';
import { browserHistory, Link } from 'react-router';

class FeedListItem extends React.Component {
  render() {
    return (
      <li>
        <Link to={`/feeds/${this.props.id}`}>
          <span className='truncate'>{this.props.title}</span>
        </Link>
      </li>
    );
  }
}

export default FeedListItem;
