import * as React from 'react';
import * as redux from 'redux';
import { connect } from 'react-redux';

import { UserMessage } from 'type-script-server/src/models';
import { sendMessageAction } from '../actions';
import { ChatState } from '../state';

import { Messages } from './Messages';
import { ChatInput } from './ChatInput';

const mapStateToProps = (state: ChatState, ownProps: OwnProps): ConnectedState => ({
  messages: state.messages
});

const mapDispatchToProps = (dispatch: redux.Dispatch<ChatState>): ConnectedDispatch => ({
  sendMessage: (message: UserMessage, socket: WebSocket) => {
    dispatch(sendMessageAction(message, socket));
  }
});

interface OwnProps {
  socket: WebSocket,
  username: string
}

interface ConnectedState {
  messages: UserMessage[]
}

interface ConnectedDispatch {
  sendMessage: (message: UserMessage, socket: WebSocket) => void
}

interface OwnState {
}

export class ChatAppComponent extends React.Component<ConnectedState & ConnectedDispatch & OwnProps, OwnState> {

  sendHandler = (message: string) => {
    const messageObject: Object = {
      name: this.props.username,
      message: message
    }
    const newMessage: UserMessage = new UserMessage(JSON.stringify(messageObject));
    this.props.sendMessage(newMessage, this.props.socket);
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
