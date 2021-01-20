import React, { Component } from "react";
import TweetEmbed from "react-tweet-embed";
class Tweet extends Component {
  render() {
    return (
      <div className="tweet">
        <h2>Tweets</h2>
        <div className="row ">
          <div className="col s12 m4">
            <TweetEmbed
              id="1351517381357678594"
              style={{ height: "100px", width: "100px" }}
            />
          </div>
          <div className="col s12 m4">
            <TweetEmbed id="1351574624161701891" />
          </div>
          <div className="col s12 m4">
            <TweetEmbed id="1351533523715424256" />
          </div>
        </div>
      </div>
    );
  }
}

export default Tweet;
