import {
  TWEETS_FILTER,
} from '../constants';

export const tweetsFilter = (filter) => {
  return {
    type: TWEETS_FILTER,
    filter,
  };
};
