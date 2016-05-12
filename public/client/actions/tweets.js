import {
  ADD_NEW_TWEETS,
  POST_TWEET,
  TRASH_TWEET,
} from '../constants.js';
import { fetchRequest, fetchSuccess, fetchFailure } from './requestStatus';

export function addTweets(tweets) {
  return {
    type: ADD_NEW_TWEETS,
    tweets,
  };
}

export function postTweet(id) {
  return {
    type: POST_TWEET,
    id,
  };
}

export function trashTweet(id) {
  return {
    type: TRASH_TWEET,
    id,
  };
}

//set into local storage
//this should probably be called when dashboard mounts and user is authenticated
//makes a call to api to retrieve most current tweets in database

export function getTweetsAsync() {
  return dispatch => {
    dispatch(fetchRequest());
    return fetch('http://127.0.0.1:1337/generateDummy', { method: 'GET', mode: 'cors' })
      .then(result => result.json())
      .then(result => {
        // console.log(result);
        localStorage.setItem('tweets', JSON.stringify(result));
        return dispatch(addTweets(tweets));
      })
      .catch(err => {
        console.error(err);
        dispatch(fetchFailure(err));
      });
  };
};

// id is generated tweet ID
export function postTweetAsync(id) {
  return dispatch => {
    dispatch(fetchRequest());
    return fetch('http://127.0.0.1:1337/postTweet/' + id, { method: 'POST', credentials: 'same-origin' })
      .then(res => {
        // if successful
        //COMMENT OUT conditional to test success
        // if (res.status === 201) {
          dispatch(fetchSuccess());
          dispatch(postTweet(id));
        // }
        // if (res.status === 404) {
        //   dispatch(postFailure(res.status));
        // }
      })
      .catch(err => {
        dispatch(fetchFailure(err));
      });
  };
};
