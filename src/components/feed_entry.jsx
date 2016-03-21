import React, { PropTypes } from 'react';
import ListItem from 'material-ui/lib/lists/list-item';
import {Card, CardHeader, CardText} from 'material-ui/lib/card';

class FeedEntry extends React.Component {
  render() {
    var image = "";

    if(this.props.image !== null){
      image = <img src={`http://thumbs.picyo.me/200x200/smart/${this.props.image}`} />;
    }

    return (
      <Card>
        <CardHeader title={this.props.title}/>
        <CardText>
          {image}
          {this.props.summary}
        </CardText>
      </Card>
    );
  }
}

export default FeedEntry;
