import { Action } from '../actions';

import { Message as MessageModel } from 'type-script-server/src/index';
import { UserMessage } from '../model/UserMessage';
import { ChatState } from '../state';

const initialState: ChatState = {
  messages: [],
  users: []
};

export function addUser(state: ChatState = initialState, action: Action): ChatState {
  if (action.type === 'ADD_USER') {
    const joinedUserMessageObject: MessageModel = {
      name: action.username,
      message: "joined the chat"
    }
    const joinedUserMessage: MessageModel = new UserMessage(JSON.stringify(joinedUserMessageObject));
    action.socket.send(JSON.stringify(joinedUserMessage));
    return {
      messages: state.messages,
      users: [ ...state.users, action.username ]
    };
  }

  return state;
}
