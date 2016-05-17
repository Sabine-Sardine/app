import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

export default class PostModal extends React.Component {

  handleOpen() {

  }

  handleClose() {

  }
  
  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Post"
        primary={true}
        onTouchTap={this.}
    ];

    return (
      <div>
        <RaisedButton label

      </div>

    )
  }
}