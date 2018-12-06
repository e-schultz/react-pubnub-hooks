import ChatEngineCore from 'chat-engine';
import React, { createContext } from 'react';

const PUBLISH_KEY = 'pub-c-56d67766-dce8-4de5-9fc5-5cc93cb4752e';
const SUBSCRIBE_KEY = 'sub-c-670dc974-f80b-11e8-a39c-e60c31199fb2';

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
