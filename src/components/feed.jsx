import React, { PropTypes } from 'react';
import { connect, PromiseState } from 'react-refetch'

import FeedEntriesList from './feed_entries_list';

class Feed extends React.Component {
  render() {
    const {entriesFetch} = this.props;
    var entries = ';'

    if (entriesFetch.fulfilled){
      entries = <FeedEntriesList entries={entriesFetch.value['user_feed_entries']} />;
    } else{
      entries = <h1>Loading</h1>;
    }

    return (
      <div>
        {entries}
      </div>
    );
  }
}

export default Feed;

export default connect(props => ({
  entriesFetch: `https://feedme.mskog.com/api/v1/feeds/${props.params.id}/entries.json?user_email=mrcheese0@gmail.com&user_token=4Mxa-sFZ26RiMttynmQ5`
}))(Feed)
