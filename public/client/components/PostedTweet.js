import React, { PropTypes } from 'react';
import styles from '../styles/tweet.css';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';

const style = {
  main: {
    margin: '16px 32px 16px 0',
    width: '50%',
    float: 'right'
  },
  paper: {
    border: '1px #ddd',
    'border-radius': '4px',
    padding: '10px',
    color: 'green',
  }
};

const PostedTweet = ({
  tweet
}) => {

  return (
    <Card style={style.main}>
      <CardHeader
        title="Bot Generated Tweet" 
        subtitle={tweet.created_at}
        avatar="http://lorempixel.com/100/100/nature/"
      />
      <CardTitle title="Tweet Text: " subtitle="Below is content generated for tweet" />
      <CardText style={style.paper}>
      {tweet.tweet_text}
      </CardText>
      <Paper href="/linktooriginaltwittercontent" style={style.paper}>
        "HERE WE WOULD REFERENCE ORIGINAL CONTENT"
      </Paper>
    </Card>
  );
};

PostedTweet.propTypes = {
  tweet: PropTypes.object,
};

export default PostedTweet;


// user_twitter_id: tweet.user.id_str,
//     tweet_text: tweet.text,
//     original_tweet_id: tweet.quoted_status_id_str,
//     // right now not being used, but could store info from the original
//     // tweet like retweet_count and followers_count to track performance
//     // of our algorithm
//     original_tweet_props: '',
//     retweet_id: tweet.id_str,
//     retweet_count: 0,
//     favorite_count: 0,
//     created_at: new Date(tweet.created_at),
//     updated_at: new Date()


