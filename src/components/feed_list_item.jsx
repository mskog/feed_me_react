import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';
import ListItem from 'material-ui/lib/lists/list-item';

class FeedListItem extends React.Component {
  handleClick(){
    browserHistory.push(`/feeds/${this.props.id}`)
  }

  render() {
    return (
      <ListItem primaryText={this.props.title} onClick={this.handleClick.bind(this)}/>
    );
  }
}

export default FeedListItem;
