import React, { PropTypes } from 'react';
import {Preloader, Button} from 'react-materialize';
import { router, browserHistory, Link } from 'react-router';

import FeedEntriesList from './feed_entries_list';

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {entries: []};
  }

  componentWillReceiveProps(nextProps) {
    this.setState({entries: this.state.entries.concat(nextProps.entries)});
  }

  render() {
    var moreButton = '';

    if (this.props.hasMore){
      moreButton = <Link to={this.props.loadMore()}> <Button>More...</Button> </Link>
    }

    return (
      <div>
        <FeedEntriesList key={this.props.key} entries={this.state.entries} />
        {moreButton}
      </div>
    );
  }
}

export default Feed;
