import React, { PropTypes } from 'react';
import styles from '../styles/tweet.css';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const style = {
  margin: '16px 32px 16px 0',
  width: '60%',
//   float: 'right'
};

const Tweet = ({
  tweet,
  postTweet,
  trashTweet,
}) => (
  <Card style={style}>
    <CardHeader
      title="Tweet"
      subtitle="Subtitle"
      avatar="http://lorempixel.com/100/100/nature/"
    />
    <CardTitle title="Card title" subtitle="Card subtitle" />
    <CardText>
    {tweet.text}
      <ul>
        <li>Retweets: {tweet.retweets}</li>
        <li>Favorited: {tweet.favorites}</li>
        <li>Tweeted by: {tweet.screenName}</li>
        <li>Followers: {tweet.followers}</li>
      </ul>
    </CardText>
    <CardActions>
      <FlatButton label="POST" onClick={postTweet} />
      <FlatButton label="TRASH" onClick={trashTweet} />
      <FlatButton label="EDIT" />
    </CardActions>
  </Card>
);

Tweet.propTypes = {
  tweet: PropTypes.object,
  postTweet: PropTypes.func,
  trashTweet: PropTypes.func,
};

export default Tweet;
