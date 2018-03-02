import { Message as MessageModel } from 'type-script-server/src/index';

export interface ChatState {
  messages: MessageModel[],
  users: string[]
}
