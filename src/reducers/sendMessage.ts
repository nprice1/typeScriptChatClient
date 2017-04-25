import { Action } from '../actions';
import { ChatState } from '../state';

const initialState: ChatState = {
  messages: [],
  users: []
};

export function sendMessage(state: ChatState = initialState, action: Action): ChatState {
  if (action.type === 'SEND_MESSAGE') {
    action.socket.send(JSON.stringify(action.message));
    return state;
  }

  return state;
}
