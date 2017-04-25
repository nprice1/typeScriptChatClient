import { Action } from '../actions';
import { ChatState } from '../state';

const initialState: ChatState = {
  messages: [],
  users: []
};

export function addMessage(state: ChatState = initialState, action: Action): ChatState {
  if (action.type === 'ADD_MESSAGE') {
    console.log("ADDING MESSAGE");
    return {
      messages: [ ...state.messages, action.message ],
      users: state.users
    };
  }

  return state;
}
