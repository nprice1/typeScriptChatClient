import * as React from 'react';
import * as redux from 'redux';
import { connect } from 'react-redux';

import { Message as MessageModel } from 'type-script-server/src/index';
import { UserMessage } from '../model/UserMessage';
import { ChatState } from '../state';
import { Action } from '../actions';

import { Messages } from './Messages';
import { ChatInput } from './ChatInput';

const mapStateToProps = (state: ChatState, ownProps: OwnProps): ConnectedState => ({
  messages: state.messages
});

const mapDispatchToProps = (dispatch: redux.Dispatch<Action>): ConnectedDispatch => ({});

interface OwnProps {
  socket: WebSocket,
  username: string
}

interface ConnectedState {
  messages: MessageModel[]
}

interface ConnectedDispatch {
}

interface OwnState {
}

export class ChatAppComponent extends React.Component<ConnectedState & ConnectedDispatch & OwnProps, OwnState> {

  sendHandler = (message: string) => {
    const messageObject: MessageModel = {
      name: this.props.username,
      message: message
    }
    this.props.socket.send(JSON.stringify(messageObject));
  }

  render() {
     return (
       <div className="container">
         <h3>React Chat App</h3>
         <Messages username={this.props.username} messages={this.props.messages} />
         <ChatInput onSend={this.sendHandler} />
       </div>
     );
   }
}

export const ChatApp: React.ComponentClass<OwnProps> = connect(mapStateToProps, mapDispatchToProps)(ChatAppComponent);
