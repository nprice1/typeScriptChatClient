import * as React from 'react';

interface OwnProps {
  onSend: (UserMessage: string) => void
}

interface OwnState {
  chatInput: string
}

export class ChatInput extends React.Component<OwnProps, OwnState> {

  state = {
    chatInput: ''
  }

  textChangeHandler = (event: any) => {
    this.setState({ chatInput: event.target.value });
  }

  submitHandler = (event: any) => {
    // Stop the form from refreshing the page on submit
    event.preventDefault();

    // Call the onSend callback with the chatInput UserMessage
    this.props.onSend(this.state.chatInput);

    // Clear the input box
    this.setState({ chatInput: '' });
  }

  render() {
    return (
       <form className="chat-input" onSubmit={this.submitHandler}>
         <input type="text"
           onChange={this.textChangeHandler}
           value={this.state.chatInput}
           placeholder="Write a UserMessage..."
           required />
       </form>
    );
  }

}
