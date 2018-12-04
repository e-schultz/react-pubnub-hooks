import { useState, useEffect } from 'react';
import { getChatEngine } from './chat-engine';

const ChatEngine = getChatEngine();

export function withChatInput() {
  const [chatInput, setChatInput] = useState('');

  return [chatInput, setChatInput];
}

export function withMessages() {
  let [messages, setMessages] = useState([]);

  const handleMessage = payload => {
    setMessages([
      ...messages,
      {
        sender: payload.sender.uuid,
        text: payload.data.text
      }
    ]);
  };

  useEffect(() => {
    ChatEngine.global.on('message', handleMessage);

    return () => {
      ChatEngine.global.off('message', handleMessage);
    };
  });

  function sendMessage(message) {
    ChatEngine.global.emit('message', {
      text: message
    });
  }
  return [messages, sendMessage];
}
