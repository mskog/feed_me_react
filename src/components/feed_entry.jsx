import React, { PropTypes } from 'react';
import { Card, CardHeader, CardTitle } from 'react-materialize';

class FeedEntry extends React.Component {
  render() {
    var image = "";

    if(this.props.image !== null){
      image = <img className="lazyload responsive-img" data-sizes="auto" data-src={`https://thumbs.picyo.me/300x300/smart/${this.props.image}`} />;
    }

    return (
      <div className="card-panel">
        <div className="row">
          <div className="col l3 m3 s12 hide-on-small-only">
            {image}
          </div>
          <div className="col l9 m9 s12">
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
