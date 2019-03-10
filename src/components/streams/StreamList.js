import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStreams } from '../../actions';


class StreamList extends Component {

  static propTypes = {
    fetchStreams: PropTypes.func,
    currentUserId: PropTypes.string,
    isSignedIn: PropTypes.bool,
  };
  
  componentDidMount = () => {
    this.props.fetchStreams();
  };

  renderAdminButtons = id => (
    <div className="right floated content">
      <Link to={`/stream/edit/${id}`} className="ui button primary">
        Edit
      </Link>
      <Link to={'/'} className="ui button negative">
        Delete
      </Link>
    </div>
  );
  
  render() {
    const { streams, currentUserId, isSignedIn } = this.props;

    return (
      <main>
        <h2>Streams</h2>
        <div className="ui celled list">
          {streams.map(({ id, title, description, userId }) => (
            <section className="item" key={id}>
              {userId === currentUserId && this.renderAdminButtons(id)}
              <i className="large middle aligned icon camera"/>
              <div className="content">
                {title}
                <p className="description">{description}</p>
              </div>
            </section>
          ))}
        </div>
        {isSignedIn &&
          <div style={{ textAlign: 'right' }}>
            <Link to="/stream/new" className="ui button primary">Create Stream</Link>
          </div>
        }
      </main>
    );
  }
}

const mapStateToProps = ({ streams, auth }) => ({
  streams: Object.values(streams),
  currentUserId: auth.userId,
  isSignedIn: auth.isSignedIn
});

export default connect(mapStateToProps, { fetchStreams })(StreamList);
