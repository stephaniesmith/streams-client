import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends Component {

  componentDidMount = () => {
    const { id } = this.props.match.params;
    this.props.fetchStream(id);
  };

  onSubmit = formValues => {
    const { id } = this.props.match.params;
    this.props.editStream(id, formValues);
  };
  
  
  render() {
    if(!this.props.stream) return <div>Loading...</div>;
    const { title, description } = this.props.stream;

    return (
      <main>
        <h3>Edit a Stream</h3>
        <StreamForm initialValues={{ title, description }} onSubmit={this.onSubmit}/>
      </main>
    );
  }
}

StreamEdit.propTypes = {
  stream: PropTypes.object,
};

const mapStateToProps = ({ streams }, { match }) => ({
  stream: streams[match.params.id]
});

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit);
