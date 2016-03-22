import React, { PropTypes } from 'react';
import { connect, PromiseState } from 'react-refetch'
import {Preloader} from 'react-materialize';

import FeedEntriesList from './feed_entries_list';

class Feed extends React.Component {
  render() {
    const {entriesFetch} = this.props;
    var entries = ';'

    if (entriesFetch.fulfilled){
      entries = <FeedEntriesList entries={entriesFetch.value['user_feed_entries']} />;
    } else{
      entries = <div className="center-align"><Preloader size="small" /></div>;
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
