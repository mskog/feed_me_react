import React, { PropTypes } from 'react';
import { connect, PromiseState } from 'react-refetch'
import {Preloader, Button} from 'react-materialize';
import { router, browserHistory, Link } from 'react-router';

import FeedEntriesList from './feed_entries_list';

class Feed extends React.Component {
  hasMorePages(){
    const {entriesFetch} = this.props;
    return entriesFetch.value.meta.next_page !== null;
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
    var moreButton = '';

    if (entriesFetch.fulfilled){
      values = entriesFetch.value['feed_entries']
      if (this.hasMorePages()) {
        moreButton = <Link to={this.nextPage()}> <Button>More...</Button> </Link>
      }
    } else{
      loader = <div className="center-align"><Preloader size="small" /></div>;
    }

    return (
      <div>
        <FeedEntriesList key={this.props.params.id} entries={values} />
        {loader}
        {moreButton}
      </div>
    );
  }
}

export default Feed;

export default connect(props => ({
  entriesFetch: `https://feedme.mskog.com/api/v1/feeds/${props.params.id}/entries.json?page=${props.location.query.page !== undefined ? props.location.query.page : 1}&user_email=mrcheese0@gmail.com&user_token=4Mxa-sFZ26RiMttynmQ5`
}))(Feed)
