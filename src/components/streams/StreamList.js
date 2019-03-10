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
  
  render() {
    const { streams } = this.props;

    return (
      <main>
        <h2>Streams</h2>
        <div className="ui celled list">
          {streams.map(({ id, title, description }) => (
            <section className="item" key={id}>
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

const mapStateToProps = ({ streams }) => ({
  streams: Object.values(streams)
});

export default connect(mapStateToProps, { fetchStreams })(StreamList);
