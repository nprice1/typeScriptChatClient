import * as React from 'react';
import * as redux from 'redux';
import { connect } from 'react-redux';

import { Action, addUserAction } from '../actions';
import { ChatState } from '../state';

import { ChatApp } from './ChatApp';

const mapStateToProps = (state: ChatState, ownProps: OwnProps): ConnectedState => ({});

const mapDispatchToProps = (dispatch: redux.Dispatch<Action>): ConnectedDispatch => ({
  addUser: (username: string, socket: WebSocket) => {
    dispatch(addUserAction(username, socket));
  }
});

interface OwnProps {
  socket: WebSocket
}

interface ConnectedState {
}

interface ConnectedDispatch {
  addUser: (username: string, socket: WebSocket) => void
}

interface OwnState {
  username: string,
  submitted: boolean
}

export class AppComponent extends React.Component<ConnectedState & ConnectedDispatch & OwnProps, OwnState> {

  state = {
    username: '',
    submitted: false
  }

  usernameChangeHandler = (event: any) => {
    this.setState({ username: event.target.value });
  }

  usernameSubmitHandler = (event: any) => {
    event.preventDefault();
    this.setState({ submitted: true, username: this.state.username });
    this.props.addUser(this.state.username, this.props.socket);
  }

  render() {
    if (this.state.submitted) {
      // Form was submitted, now show the main App
      return (
        <ChatApp username={this.state.username} socket={this.props.socket} />
      );
    }
    return (
      <form onSubmit={this.usernameSubmitHandler} className="username-container">
        <h1>React Instant Chat</h1>
        <div>
          <input
            type="text"
            onChange={this.usernameChangeHandler}
            placeholder="Enter a username..."
            required />
        </div>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export const App: React.ComponentClass<OwnProps> = connect(mapStateToProps, mapDispatchToProps)(AppComponent);
