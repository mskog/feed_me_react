import React, { PropTypes } from 'react';
import FeedListItem from './feed_list_item';

class FeedList extends React.Component {
  render() {
    var currentId = this.props.currentId;
    var items = this.props.items.map(function(item, index) {
      return (
        <FeedListItem {...item} key={item.id} current={currentId == item.id} />
    )});

    return(
      <ul className="side-nav fixed">
        <h5 className="center-align">Feeds</h5>
        {items}
      </ul>
    )
  }
}

export default FeedList;
