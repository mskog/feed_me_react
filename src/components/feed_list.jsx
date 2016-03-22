import React, { PropTypes } from 'react';
import { connect, PromiseState } from 'react-refetch'
import {Preloader} from 'react-materialize';

import FeedListItem from './feed_list_item';

class FeedList extends React.Component {
  render() {
    const {feedsFetch} = this.props;
    var items = ';'

    if (feedsFetch.fulfilled){
      items = feedsFetch.value['user_feeds'].map(function(item, index) {
        return (
          <FeedListItem {...item} key={item.id} />
      )});
    }
    else{
      return <Preloader size="small" />;
    }

    return(
      <ul className="side-nav fixed">
        <h5 className="center-align">Feeds</h5>
        {items}
      </ul>
    )
  }
}

export default FeedList;

export default connect(props => ({
  feedsFetch: `https://feedme.mskog.com/api/v1/feeds.json?user_email=mrcheese0@gmail.com&user_token=4Mxa-sFZ26RiMttynmQ5`
}))(FeedList)
