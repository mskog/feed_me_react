import React, { PropTypes } from 'react';
import FeedEntry from './feed_entry';
import { connect, PromiseState } from 'react-refetch';
import {Preloader} from 'react-materialize';

class FeedEntriesList extends React.Component {
  render() {
    const {entriesFetch} = this.props;
    var entries = ';'

    if (entriesFetch.fulfilled){
      entries = entriesFetch.value['user_feed_entries'].map(function(entry, index) {
        return (
          <FeedEntry {...entry} key={entry.id} />
      )});
    } else{
      entries = <div className="center-align"><Preloader size="small" /></div>;
    }

    return(
      <div>
        {entries}
      </div>
    )
  }
}

export default FeedEntriesList;

export default connect(props => ({
  entriesFetch: `https://feedme.mskog.com/api/v1/feeds/${props.id}/entries.json?page=${props.page}&user_email=mrcheese0@gmail.com&user_token=4Mxa-sFZ26RiMttynmQ5`
}))(FeedEntriesList)
