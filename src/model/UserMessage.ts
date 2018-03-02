import { Message } from 'type-script-server/src/index';

export class UserMessage implements Message {
    name: string;
    message: string;

    constructor(payload: string) {
        var data = JSON.parse(payload);

        if (!data.name || !data.message) {
            throw new Error('Invalid message payload received: ' + payload);
        }

        this.name = data.name;
        this.message = data.message;
    }
}