import React, { PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';

// const style = {
//   margin: '16px 32px 16px 0',
//   width: '33%',
//   // display: 'flex',
//   // 'justifyContent': 'flex-start'
//   float: 'left',
//   height: '100%'
// };

const style = {
  menuItem: {
    width: '100%',
    border: '1px black',
  },
  menu: {
    margin: '16px 32px 16px 0',
    width: '33%',
  },
};
const SideMenu = () => (
    <Paper style={style.menu} zDepth={1} rounded={false}>
      <Menu style={style.menu}>
        <MenuItem primaryText="Profile" selectedMenuItemStyle={style.menuItem} href="/"/>
        <MenuItem primaryText="Build A Bot" selectedMenuItemStyle={style.menuItem} />
        <MenuItem primaryText="Your Bots" selectedMenuItemStyle={style.menuItem}/>
        <MenuItem primaryText="Bot Tweets History" selectedMenuItemStyle={style.menuItem} />
        <Divider/>
        <MenuItem primaryText="Logout"/>
      </Menu>
    </Paper>
);


export default SideMenu;
