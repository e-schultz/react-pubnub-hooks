import React from 'react';
import { withChatInput, withMessages } from './chat.hooks';

import './App.css';

const App = () => {
  const [chatInput, setChatInput] = withChatInput();
  const [messages, sendMessage, , isReady] = withMessages();

  return (
    <div>
      {isReady ? (
        <ul>
          {messages.map(n => {
            return (
              <li>
                {n.sender} - {n.text}
              </li>
            );
          })}
        </ul>
      ) : (
        <div>Not Ready</div>
      )}

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
    </div>
  );
};

export default App;
