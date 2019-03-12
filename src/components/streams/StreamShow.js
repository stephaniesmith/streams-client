import React, { Component, createRef } from 'react';
import flv from 'flv.js';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchStream } from '../../actions';

class StreamShow extends Component {
  constructor(props) {
    super(props);

    this.videoRef = createRef();
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchStream(id);
  }
  
  render() {
    if(!this.props.stream) return <div>Loading...</div>;

    const { title, description } = this.props.stream;
    
    return (
      <div>
        <video ref={this.videoRef} style={{ width: '100%' }} controls/>
        <h1>{title}</h1>
        <h5>{description}</h5>
      </div>
    );
  }
}

StreamShow.propTypes = {
  fetchStream: PropTypes.func,
  stream: PropTypes.object,
};

const mapStateToProps = ({ streams }, { match }) => ({
  stream: streams[match.params.id]
});

export default connect(mapStateToProps, { fetchStream })(StreamShow);
