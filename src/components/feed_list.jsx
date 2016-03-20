import React, { PropTypes } from 'react';
import { connect, PromiseState } from 'react-refetch'
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';

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
      return <h3>Fetching</h3>;
    }

    return(
      <List>
        {items}
      </List>
    )
  }
}

export default FeedList;

export default connect(props => ({
  feedsFetch: `https://feedme.mskog.com/api/v1/feeds.json?user_email=mrcheese0@gmail.com&user_token=4Mxa-sFZ26RiMttynmQ5`
}))(FeedList)
