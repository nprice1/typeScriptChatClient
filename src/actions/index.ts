import { Message as MessageModel } from 'type-script-server/src/models';

export type Action = {
  type: 'ADD_MESSAGE',
  message: MessageModel
} | {
  type: 'SEND_MESSAGE',
  message: MessageModel,
  socket: WebSocket
} | {
  type: 'ADD_USER',
  username: string,
  socket: WebSocket
}

export const addMessageAction = (message: MessageModel): Action => ({
  type: 'ADD_MESSAGE',
  message
});

export const sendMessageAction = (message: MessageModel, socket: WebSocket): Action => ({
  type: 'SEND_MESSAGE',
  message,
  socket
});

export const addUserAction = (username: string, socket: WebSocket): Action => ({
  type: 'ADD_USER',
  username,
  socket
});
