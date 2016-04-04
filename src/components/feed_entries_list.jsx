import React, { PropTypes } from 'react';
import FeedEntry from './feed_entry';
import {Preloader} from 'react-materialize';

class FeedEntriesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {entries: []};
  }

  componentWillReceiveProps(nextProps) {
    this.setState({entries: this.state.entries.concat(nextProps.entries)});
  }

  render() {
    let entries = this.state.entries.map(function(entry, index) {
      return <FeedEntry {...entry} key={entry.id} />;
    });

    return(
      <div>
        {entries}
      </div>
    )
  }
}

export default FeedEntriesList;
