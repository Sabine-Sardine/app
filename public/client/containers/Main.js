import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import SiteNav from '../components/SiteNav';
import { logoutUser } from '../actions/Logout';

const style = {
  sidebar: {
    position:'fixed',
    width: '30%',
    float:'left',
    height: '100%'
  },
  main: {
    position: 'relative',
    width: '65%',
    float: 'right',
    overflow: 'hidden'
  }
}

const Main = ({ dispatch, isAuthenticated, main, sidebar }) => (
  <div>
    <SiteNav
      isAuthenticated={isAuthenticated}
      onLogoutClick={() => dispatch(logoutUser())}/>
    <div styles={style.sidebar}>
      {sidebar}
    </div>
    <div styles={style.main}>
      {main}
    </div>
  </div>
);

Main.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  children: PropTypes.object,
};

// These props come from the application's
// state when it is started
function mapStatetoProps(state) {
  const { authStatus } = state;
  const { isAuthenticated } = authStatus;
  return {
    isAuthenticated
  };
}

const MainContainer = connect(
  mapStatetoProps
)(Main);

export default MainContainer;
