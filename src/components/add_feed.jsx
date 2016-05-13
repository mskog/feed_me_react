import React, { PropTypes } from 'react';
import {Button} from 'react-materialize';

class AddFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {feed_url: ''};
  }

  handleChange() {
    this.setState({
      feed_url: this.refs.feed_url.value
    });
  }

  addFeed(){
    this.props.addFeed(this.state.feed_url);
  }

  render() {
    return (
      <div className="row">
        <h1>Add Feed</h1>
        <div className="input-field col s12">
          <label for="feed_url">Feed URL</label>
          <input id="feed_url" ref="feed_url" type='text' value={this.state.feed_url} onChange={this.handleChange.bind(this)}/>
          <Button onClick={this.addFeed.bind(this)} waves="light">Add</Button>
        </div>
      </div>
    )
  }
}

export default AddFeed;
