import React, { PropTypes } from 'react';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';

class FeedList extends React.Component {
  render() {
    return(
      <List>
        <ListItem primaryText='hello' />
      </List>
    )
  }
}

export default FeedList;
