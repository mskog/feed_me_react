import React, { PropTypes } from 'react';
import { router, browserHistory, Link } from 'react-router';

class FeedListItem extends React.Component {
  render() {
    var link = '';
    var linkContents = <span className='truncate'>{this.props.title}</span>;

    if (this.props.current){
      link = <a>{linkContents}</a>
    }else{
      link = <Link to={`/feeds/${this.props.id}`}>
        {linkContents}
      </Link>
    }

    return (
      <li>
        {link}
      </li>
    );
  }
}

export default FeedListItem;
