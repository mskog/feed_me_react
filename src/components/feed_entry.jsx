import React, { PropTypes } from 'react';
import { Card, CardHeader, CardTitle } from 'react-materialize';

class FeedEntry extends React.Component {
  render() {
    var image = "";

    if(this.props.image !== null){
      image = <img className="responsive-img" src={`https://thumbs.picyo.me/300x300/smart/${this.props.image}`} />;
    }

    return (
      <div className="card-panel">
        <div className="row">
          <div className="col l3 hide-on-med-and-down">
            {image}
          </div>
          <div className="col l9">
            <a href={this.props.url} target="_blank">
              <h5 className="truncate">{this.props.title}</h5>
            </a>
            <p>{this.props.summary}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default FeedEntry;
