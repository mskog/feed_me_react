import React, { PropTypes } from 'react';
import { connect, PromiseState } from 'react-refetch'
import {Preloader, Button} from 'react-materialize';
import { router, browserHistory, Link } from 'react-router';

import FeedEntriesList from './feed_entries_list';

class Feed extends React.Component {

  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  currentPage(){
    let page = this.props.location.query.page;
    return page !== undefined ? page : 1;
  }

  nextPage(){
    let currentPath = this.props.location.pathname;
    browserHistory.push(`${currentPath}?page=${parseInt(this.currentPage())+1}`);
  }

  render() {
    return (
      <div>
        <Button onClick={this.nextPage.bind(this)}>More...</Button>
        <FeedEntriesList id={this.props.params.id} page={this.currentPage()}/>
      </div>
    );
  }
}

export default Feed;
