import { UserMessage } from 'type-script-server/src/models';

export type Action = {
  type: 'ADD_MESSAGE',
  message: UserMessage
} | {
  type: 'SEND_MESSAGE',
  message: UserMessage,
  socket: WebSocket
} | {
  type: 'ADD_USER',
  username: string,
  socket: WebSocket
}

export const addMessageAction = (message: UserMessage): Action => ({
  type: 'ADD_MESSAGE',
  message
});

export const sendMessageAction = (message: UserMessage, socket: WebSocket): Action => ({
  type: 'SEND_MESSAGE',
  message,
  socket
});

export const addUserAction = (username: string, socket: WebSocket): Action => ({
  type: 'ADD_USER',
  username,
  socket
});
