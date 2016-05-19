import React, { PropTypes } from 'react';
import FeedListItem from './feed_list_item';
import {Button} from 'react-materialize';
import { router, browserHistory, Link } from 'react-router';

class FeedList extends React.Component {
  render() {
    var currentId = this.props.currentId;
    var items = this.props.items.map(function(item, index) {
      return (
        <FeedListItem {...item.attributes} id={item.id} key={item.id} current={currentId == item.id} />
    )});

    return(
      <ul className="side-nav fixed">
        <h5 className="center-align">Feeds</h5>
        {items}
        <li>
          <Link to="/feeds/new">Add Feed</Link>
        </li>
      </ul>
    )
  }
}

export default FeedList;
