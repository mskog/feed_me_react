import React, { PropTypes } from 'react';
import { connect, PromiseState } from 'react-refetch'
import {Preloader, Button} from 'react-materialize';

import Feed from '../components/feed';

class FeedContainer extends React.Component {
  hasMorePages(){
    const {entriesFetch} = this.props;
    if (entriesFetch.fulfilled){
      return entriesFetch.value.meta.next_page !== null;
    }
    else{
      return false;
    }
  }

  currentPage(){
    let page = this.props.location.query.page;
    return page !== undefined ? page : 1;
  }

  nextPage(){
    let currentPath = this.props.location.pathname;
    return `${currentPath}?page=${parseInt(this.currentPage())+1}`;
  }

  render() {
    const {entriesFetch} = this.props;
    var values = [];
    var loader = '';

    if (entriesFetch.fulfilled){
      values = entriesFetch.value['feed_entries'];
    } else{
      loader = <div className="center-align"><Preloader size="small" /></div>;
    }

    return (
      <div>
        <Feed key={this.props.params.id} entries={values} hasMore={this.hasMorePages()} loadMore={this.nextPage.bind(this)} />
        {loader}
      </div>
    );
  }
}

export default FeedContainer;

export default connect(props => ({
  entriesFetch: `https://feedme.mskog.com/api/v1/user_feed_entries.json?user_feed_id=${props.params.id}&page=${props.location.query.page !== undefined ? props.location.query.page : 1}&user_email=mrcheese0@gmail.com&user_token=4Mxa-sFZ26RiMttynmQ5`
}))(FeedContainer)
