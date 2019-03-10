import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamCreate extends Component {

  static propTypes = {
    createStream: PropTypes.func,
  };

  onSubmit = formValues => {
    this.props.createStream(formValues);
  };

  render() {
    return (
      <main>
        <h3>Create a Stream</h3>
        <StreamForm onSubmit={this.onSubmit}/>
      </main>
    );
  }
}

StreamCreate.propTypes = {
  handleSubmit: PropTypes.func,
};

export default connect(null, { createStream })(StreamCreate);
