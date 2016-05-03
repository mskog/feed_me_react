import React, { PropTypes } from 'react';
import { connect, PromiseState } from 'react-refetch'
import {Preloader} from 'react-materialize';

import FeedList from '../components/feed_list';

class FeedsContainer extends React.Component {
  render() {
    const {feedsFetch} = this.props;
    var items = [];

    if (feedsFetch.fulfilled){
      items = feedsFetch.value['user_feeds'];
    }

    return(
      <FeedList items={items} currentId={this.props.currentId} />
    )
  }
}

export default FeedsContainer;

export default connect(props => ({
  feedsFetch: `https://feedme.mskog.com/api/v1/feeds.json?user_email=mrcheese0@gmail.com&user_token=4Mxa-sFZ26RiMttynmQ5`
}))(FeedsContainer)
