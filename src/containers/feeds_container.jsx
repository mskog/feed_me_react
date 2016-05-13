import React, { PropTypes } from 'react';
import { router, Link, IndexLink } from 'react-router';
import { connect, PromiseState } from 'react-refetch'
import TopNav from '../components/top_nav';
import {Preloader} from 'react-materialize';
import FeedList from '../components/feed_list';

class FeedsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {items: []};
  }

  componentWillReceiveProps(props) {
    const {feedsFetch} = props;
    if (feedsFetch.fulfilled){
      this.setState({items: feedsFetch.value['user_feeds']});
    }
  }

  parseJson(response){
    return response.json();
  }

  addFeed(url){
    var that = this;
    fetch("https://feedme.mskog.com/api/v1/feeds.json?user_email=mrcheese0@gmail.com&user_token=4Mxa-sFZ26RiMttynmQ5",{
      method: 'POST',
      headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
       },
      body: JSON.stringify({
        user_feed: {url: url}
      })
    })
    .then(that.parseJson)
    .then(function(response){
      that.addFeedUnlessItExists(response.user_feed);
    })
  }

  addFeedUnlessItExists(userFeed){
    var found = this.state.items.findIndex(function(item){
      return item.url == userFeed.url;
    })

    if(found === -1){
      var items = this.state.items;
      items.push(userFeed);
      this.setState({items: this.state.items.push(userFeed)});
    }
    this.context.router.push(`/feeds/${userFeed.id}`);
  }

  render() {
    var children = '';
    if (this.props.children){
      children = React.cloneElement(this.props.children, {addFeed: this.addFeed.bind(this)});
    }

    return(
      <div>
        <header>
          <TopNav />
          <FeedList items={this.state.items} currentId={this.props.params.id} />
        </header>
        <main>
          <div className="container">
            {children}
          </div>
        </main>
      </div>
    );
  }
}

FeedsContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default FeedsContainer;

export default connect(props => ({
  feedsFetch: `https://feedme.mskog.com/api/v1/feeds.json?user_email=mrcheese0@gmail.com&user_token=4Mxa-sFZ26RiMttynmQ5`
}))(FeedsContainer)
