import React from 'react';
import {connect} from 'react-redux';
import TweetListContainer from '../containers/TweetListContainer';
import { authUser } from '../actions/Login';
import { getTweetAsync } from '../actions/tweets';
import SideMenu from '../components/SideMenu';

class Dashboard extends React.Component {

  componentWillMount() {
    const { dispatch, isAuthenticated } = this.props;
    if (!isAuthenticated) {
      dispatch(authUser());
      dispatch(getTweetsAsync());
    }
  }

  render() {
    return (
      <main>
        <TweetListContainer filter="SHOW_VALID" />
      </main>

    );
  }
}

function mapStatetoProps(state) {
  return {
    isAuthenticated: state.authStatus
  };
}

export default connect(mapStatetoProps)(Dashboard);
