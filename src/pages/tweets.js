import React from "react";
import { Tweet } from "react-twitter-widgets";
import shuffle from "shuffle-array";
import ids from "../tweetIds";

class Tweets extends React.Component {
  state = {
    tweets: shuffle(ids)
  };
  render() {
    return (
      <div className="lesson-container">
        <div className="lesson lesson-flex">
          <h1>Hooray! You made it here!</h1>
          {this.state.tweets.map(id => (
            <Tweet key={id} tweetId={id} options={{ conversation: "none" }} />
          ))}
        </div>
      </div>
    );
  }
}

export default Tweets;
