import {
  ADD_NEW_TWEETS,
  POST_TWEET,
  TRASH_TWEET,
} from '../constants.js';

export function addTweets(tweets) {
  return {
    type: ADD_NEW_TWEETS,
    tweets,
  };
}

export const getTweetsRequest = () => {
  return (
    {
      type: INIT_AUTH,
      isFetching: true
    }
  );
}

export const getTweetsAsync = () => {
    const { onGetTweets } = this.props;
    return dispatch => {
      dispatch()
    }
    fetch('http://127.0.0.1:1337/generateDummy', { method: 'GET', mode: 'cors' })
    .then(result => result.json())
    .then(result => {
      console.log(result);
      localStorage.setItem('tweets', JSON.stringify(result));
      return onGetTweets(result);
    })
    .catch(err => console.error(err));
  }