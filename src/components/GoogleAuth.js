import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends Component {
  state = { isSignedIn: null };

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '237823244972-1dm7h450julruqcpv0hlofvg2onk52im.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.setState({ isSignedIn: this.auth.isSignedIn.get() });

        this.auth.isSignedIn.listen(this.onAuthChange);
      });
    });
  }

  onAuthChange = isSignedIn => {
    const { signIn, signOut } = this.props;
    isSignedIn ? signIn() : signOut();
  };

  onSignIn = () => {
    this.auth.signIn();
  };

  onSignOut = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    const { isSignedIn } = this.state;

    if(isSignedIn === null) {
      return null;
    } else if(isSignedIn) {
      return (
        <button className="ui red google button" onClick={this.onSignOut}>
          <i className="google icon"/>
          Sign Out
        </button>
      );
    } else {
      return (
        <button className="ui red google button" onClick={this.onSignIn}>
          <i className="google icon"/>
          Sign In with Google
        </button>
      );
    }
  }
  
  render() {
    return (
      <div>
        {this.renderAuthButton()}
      </div>
    );
  }
}

export default connect(null, { signIn, signOut })(GoogleAuth);
