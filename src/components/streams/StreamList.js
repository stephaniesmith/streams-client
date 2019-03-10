import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';


class StreamList extends Component {

  static propTypes = {
    fetchStreams: PropTypes.func,
  };
  
  componentDidMount = () => {
    this.props.fetchStreams();
  };

  renderAdminButtons = () => (
    <div className="right floated content">
      <button className="ui button primary">
        Edit
      </button>
      <button className="ui button negative">
        Delete
      </button>
    </div>
  );
  
  render() {
    const { streams, currentUserId } = this.props;

    return (
      <main>
        <h2>Streams</h2>
        <div className="ui celled list">
          {streams.map(({ id, title, description, userId }) => (
            <section className="item" key={id}>
              {userId === currentUserId && this.renderAdminButtons()}
              <i className="large middle aligned icon camera"/>
              <div className="content">
                {title}
                <p className="description">{description}</p>
              </div>
            </section>
          ))}
        </div>
      </main>
    );
  }
}

const mapStateToProps = ({ streams, auth }) => ({
  streams: Object.values(streams),
  currentUserId: auth.userId
});

export default connect(mapStateToProps, { fetchStreams })(StreamList);
