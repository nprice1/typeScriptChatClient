import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore, compose, Reducer } from 'redux';
import { Provider } from 'react-redux';
import { Action, addMessageAction } from './actions';
import { addMessage } from './reducers/addMessage';
import { addUser } from './reducers/addUser';
import { App } from './components/App';

import { UserMessage } from 'type-script-server/src/models';
import { ChatState } from './state';

const socket: WebSocket = new WebSocket("ws://localhost:3000");

function combineReducers(...reducers: Reducer<ChatState>[]) {
  return (state: ChatState, action: Action) => {
    return reducers.reduce((previous: ChatState, next: Reducer<ChatState>) => next(previous, action), state);
  }
}

let store = createStore(combineReducers(addMessage, addUser), undefined, (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__());

// Listen for messages from the server
socket.onmessage = (message: MessageEvent) => {
  store.dispatch(addMessageAction(new UserMessage(message.data)));
};

ReactDOM.render(
  <Provider store={store}>
    <App socket={socket} />
  </Provider>,
  document.getElementById("app")
);
