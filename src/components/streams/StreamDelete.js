import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Modal from '../Modal';
import history from '../../history';
import { fetchStream } from '../../actions';

class StreamDelete extends Component {

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchStream(id);
  }

  renderContent() {
    return this.props.stream
      ? `Are you sure you want to delete this stream with the title: ${this.props.stream.title}`
      : 'Are you sure you want to delete this stream?';
  }

  renderActions() {
    return (
      <Fragment>
        <button className="ui button">Cancel</button>
        <button className="ui button negative">Delete</button>
      </Fragment>
    );
  }

  render() {

    return (
      <Modal
        title="Delete Stream"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push('/')}/>
    );
  }
}

StreamDelete.propTypes = {
  fetchStream: PropTypes.func,
};

const mapStateToProps = ({ streams }, { match }) => ({
  stream: streams[match.params.id]
});

export default connect(mapStateToProps, { fetchStream })(StreamDelete);
