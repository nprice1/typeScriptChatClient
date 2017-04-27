import { Message as MessageModel } from 'type-script-server/src/models';

export type Action = {
  type: 'ADD_MESSAGE',
  message: MessageModel
} | {
  type: 'ADD_USER',
  username: string,
  socket: WebSocket
}

export const addMessageAction = (message: MessageModel): Action => ({
  type: 'ADD_MESSAGE',
  message
});

export const addUserAction = (username: string, socket: WebSocket): Action => ({
  type: 'ADD_USER',
  username,
  socket
});
