import React, { PropTypes, Component } from 'react';
import TemplateContainer from './Template_container';
import TemplateControlsContainer from './Template_container_Controls';
import styles from './styles/template.css';

class EditABot extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getTemplate(this.props.params.id);
  }

  componentWillReceiveProps(newprops) {

    this.props.params.id !== newprops.params.id && this.props.getTemplate(newprops.params.id);
  }

  componentDidUpdate() {
    this.props.loadHighestId(this.props.template);
  }

  componentWillUnmount() {
    this.props.trashTemplate();
  }

  render() {
    return (
      <main>
        <h1 className={styles.title}>Edit an existing bot!</h1>
        <div className={styles.container}>
          <TemplateContainer />
          <TemplateControlsContainer />
        </div>
      </main>
    )
  }
};

EditABot.contextTypes = {
  store: PropTypes.object,
  muiTheme: PropTypes.object
}

export default EditABot;
