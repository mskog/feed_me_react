import React, { PropTypes } from 'react';
import FeedEntry from './feed_entry';
import {Preloader} from 'react-materialize';

class FeedEntriesList extends React.Component {
  render() {
    let entries = this.props.entries.map(function(entry, index) {
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
