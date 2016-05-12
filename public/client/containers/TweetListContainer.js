import { connect } from 'react-redux';
import React from 'react';
import TweetList from '../components/TweetList';
import { addTweets, postTweet, trashTweet } from '../actions/tweets';
import { postTweetAsync, getTweetsAsync } from '../actions/tweets.js';
import { tweetsFilter } from '../actions/TweetsFilter';
//function that takes in tweet and filter action

const filterTweets = (tweets, filter) => {
  console.log('what is filter.........', filter);
  switch(filter) {
    case 'SHOW_ALL':
      return tweets;
    case 'SHOW_VALID':
      return tweets.filter(t => !(t.posted || t.trashed));
    case 'SHOW_POSTED':
      return tweets.filter(t => t.posted);
    case 'SHOW_TRASHED':
      return tweets.filter(t => t.trashed);
    default:
      return tweets;
  }
};
class TweetListContainer extends React.Component {

  componentWillMount() {

    this.props.filterTweets();
  }

  render() {
    const {tweets, onPostTweet, onTrashTweet, getValidTweets} = this.props;
    return (
      <TweetList 
      tweets={tweets} 
      // onGetTweets={onGetTweets} 
      onPostTweet={onPostTweet} 
      onTrashTweet={onTrashTweet}
      // getValidTweets={getValidTweets}
      />
    )
  }
}
const mapStateToProps = (state) => ({ 
  tweets: filterTweets(state.tweets, state.tweetsFilter)
});
const mapDispatchToProps = (dispatch, ownProps) => ({
  filterTweets: () => {
    dispatch(tweetsFilter(ownProps.filter));
  },
  // onGetTweets: (tweets) => {
  //   dispatch(getTweetsAsync(tweets));
  // },
  onPostTweet: (id) => {
    dispatch(postTweetAsync(id));
  },
  onTrashTweet: (id) => {
    dispatch(trashTweet(id));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TweetListContainer);

