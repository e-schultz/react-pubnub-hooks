import ChatEngineCore from 'chat-engine';
import React, { createContext } from 'react';

const PUBLISH_KEY = 'pub-c-9b914983-9487-4be5-a0e4-0c27a20e6572';
const SUBSCRIBE_KEY = 'sub-c-acc8e784-cd70-11e8-b02a-a6a8b6327be1';

const ChatContext = createContext();

function ChatContextProvider(props) {
  const now = new Date().getTime();
  const username = ['user', now].join('-');

  let chatEngine = ChatEngineCore.create(
    {
      publishKey: PUBLISH_KEY,
      subscribeKey: SUBSCRIBE_KEY
    },
    {
      globalChannel: 'chat-engine-react'
    }
  );

  chatEngine.connect(
    username,
    {
      signedOnTime: now
    },
    'auth-key'
  );
  return (
    <ChatContext.Provider value={chatEngine}>
      {props.children}
    </ChatContext.Provider>
  );
}

let ChatConsumer = ChatContext.Consumer;

export { ChatContext, ChatContextProvider, ChatConsumer };
