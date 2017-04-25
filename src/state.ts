import { UserMessage } from 'type-script-server/src/models';

export interface ChatState {
  messages: UserMessage[],
  users: string[]
}
