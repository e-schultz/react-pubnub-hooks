import React from 'react';
import { useChatInput, useMessages } from './chat.hooks';
import Messages from './Messages';
import './App.css';

const App = () => {
  const [chatInput, setChatInput] = useChatInput();
  const [messages, sendMessage, , isReady] = useMessages();

  return (
    <div>
      {!isReady ? (
        <div>Not Ready</div>
      ) : (
        <>
          <Messages messages={messages} />

          <input
            id="chat-input"
            type="text"
            name=""
            value={chatInput}
            onChange={e => setChatInput(e.target.value)}
          />
          <input
            type="button"
            onClick={e => sendMessage(chatInput)}
            value="Send Chat"
          />
        </>
      )}
    </div>
  );
};

export default App;
