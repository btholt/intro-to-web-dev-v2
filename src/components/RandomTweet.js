import React from "react";
import { Tweet } from "react-twitter-widgets";
import shuffle from "shuffle-array";
import ids from "../tweetIds";

class Tweets extends React.Component {
  state = {
    tweet: ids[Math.floor(Math.random() * ids.length)]
  };
  render() {
    return (
      <div className="lesson-flex random-tweet">
        <h3 class="tweet-head">Some words of encouragement!</h3>
        <Tweet
          key={this.state.tweet}
          tweetId={this.state.tweet}
          options={{ conversation: "none" }}
        />
      </div>
    );
  }
}

export default Tweets;
