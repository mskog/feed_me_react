import React, { PropTypes } from 'react';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import FeedEntry from './feed_entry';

class FeedEntriesList extends React.Component {
  render() {
    let entries = this.props.entries.map(function(entry, index) {
      return (
        <FeedEntry {...entry} key={entry.id} />
    )});

    return(
      <List>
        {entries}
      </List>
    )
  }
}

export default FeedEntriesList;
