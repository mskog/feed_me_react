import React, { PropTypes } from 'react';
import { Card, CardHeader, CardTitle } from 'react-materialize';

class FeedEntry extends React.Component {
  render() {
    var image = "";

    if(this.props.image !== null){
      image = <img src={`http://thumbs.picyo.me/700x200/smart/${this.props.image}`} />;
    }

    return (
      <div className="card">
        <div className="card-image">
          {image}
        </div>
        <div className="card-content">
          <a href={this.props.url} target="_blank">
            <h3 className="card-title truncate">{this.props.title}</h3>
          </a>
          <p>{this.props.summary}</p>
        </div>

      </div>
    );
  }
}

export default FeedEntry;
