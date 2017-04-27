import * as React from 'react';

import { Message as MessageModel } from 'type-script-server/src/models';

import { Message } from './Message';

interface OwnProps {
  username: string,
  messages: MessageModel[]
}

interface OwnState {
}

export class Messages extends React.Component<OwnProps, OwnState> {

  componentDidUpdate() {
    // get the UserMessagelist container and set the scrollTop to the height of the container
    const objDiv = document.getElementById('messageList');
    objDiv.scrollTop = objDiv.scrollHeight;
  }

  render() {
    // Loop through all the UserMessages in the state and create a UserMessage component
    const messages = this.props.messages.map((message: MessageModel, i) => {
        return (
          <Message
            key={i}
            username={message.name}
            message={message.message}
            fromMe={message.name === this.props.username} />
        );
      });

    return (
      <div className='messages' id='messageList'>
        { messages }
      </div>
    );
  }
}
