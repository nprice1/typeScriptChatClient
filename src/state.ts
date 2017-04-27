import { Message as MessageModel } from 'type-script-server/src/models';

export interface ChatState {
  messages: MessageModel[],
  users: string[]
}
