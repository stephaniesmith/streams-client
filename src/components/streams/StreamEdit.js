import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

class StreamEdit extends Component {

  componentDidMount = () => {
    const { id } = this.props.match.params;
    this.props.fetchStream(id);
  };
  
  
  render() {
    if(!this.props.stream) return <div>Loading...</div>;
    const { title } = this.props.stream;

    return (
      <div>
        {title}
      </div>
    );
  }
}

StreamEdit.propTypes = {
  stream: PropTypes.object,
};

const mapStateToProps = ({ streams }, { match }) => ({
  stream: streams[match.params.id]
});

export default connect(mapStateToProps, { fetchStream })(StreamEdit);
