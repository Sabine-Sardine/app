import React, { PropTypes } from 'react';
import Tweet from './Tweet';
import styles from '../styles/main.css';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';

const style = {
  display: 'inline-block',
  float: 'right',
  overflow: 'hidden',
  width: '60%'
};

const TweetList = ({ tweets, onPostTweet, onTrashTweet }) => {

  return (
    <div styles={style}>
        <FlatButton label="Get Valid Tweeties" /*onClick={getValidTweets}*//>
      <div styles={styles['tweets-list']}>
        {tweets.map((t) => (
          <Tweet
            key={t.id_str}
            tweet={t}
            postTweet={() => onPostTweet(t.id_str)}
            trashTweet={() => onTrashTweet(t.id_str)}
          />
        ))}
      </div>
    </div>
  );
};

TweetList.propTypes = {
  tweets: PropTypes.arrayOf(React.PropTypes.object),
  onGetTweets: PropTypes.func,
  onPostTweet: PropTypes.func,
  onTrashTweet: PropTypes.func,
};


export default TweetList;
