## TypeScript/WebSocket Chat Server ##

This is a very straight forward chat client that is meant to be
used with the companion project [typeScriptChatServer](https://github.com/nprice1/typeScriptChatServer).

### Usage ###

1. Clone this repository and the [typeScriptChatServer](https://github.com/nprice1/typeScriptChatServer) repository.
2. Run `npm install` then run `npm run build`.
3. Run `npm link`, then go to the typeScriptChatServer repo and run `npm link type-script-server`.
4. Start your typeScriptChatServer (run `npm start` in the project directory).
5. Run `npm run watch`.  

That's it! You should now be able to go to http://localhost:3005 and see a simple login page. Hit that page with multiple browsers and start chatting. You should have a server listening on port 3000. See the [typeScriptChatServer](https://github.com/nprice1/typeScriptChatServer)
project for instructions on how to get the server running.
