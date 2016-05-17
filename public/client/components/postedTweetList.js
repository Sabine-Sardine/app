import React, { PropTypes } from 'react';
import Posted from './PostedTweet';
import styles from '../styles/main.css';

const style = {
  position: 'fixed',
  width: '100%',
  'textAlign':'center',
};

const postedTweetList = ({ 
  tweets, 
 }) => {

  return (
    <div>
      <div style={styles['tweets-list']}>
        {tweets.map((t, index) => (
          <PostedTweet
            key={index}
            tweet={t}
            />
          ))}
      </div>
    </div>
  );
};

// postedTweetList.propTypes = {
//   tweets: PropTypes.arrayOf(React.PropTypes.object),
// };


export default postedTweetList;
