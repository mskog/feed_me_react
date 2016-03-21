import React, { PropTypes } from 'react';
import ListItem from 'material-ui/lib/lists/list-item';

class FeedEntry extends React.Component {
  render() {
    return (
      <ListItem primaryText={this.props.title} />
    );
  }
}

export default FeedEntry;
