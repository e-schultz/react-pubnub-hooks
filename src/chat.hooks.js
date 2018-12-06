import { useState, useEffect, useContext } from 'react';

import { ChatContext } from './chat-engine';

export function withChatInput() {
  const [chatInput, setChatInput] = useState('');

  return [chatInput, setChatInput];
}

export function withMessages() {
  let [messages, setMessages] = useState([]);
  let [isReady, setIsReady] = useState(false);

  let chatEngine = useContext(ChatContext);

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
    if (isReady) {
      chatEngine.global.on('message', handleMessage);

      return () => {
        chatEngine.global.off('message', handleMessage);
      };
    }
  });

  useEffect(() => {
    chatEngine.on('$.ready', () => {
      setIsReady(true);
    });
  });

  function sendMessage(message) {
    chatEngine.global.emit('message', {
      text: message
    });
  }
  return [messages, sendMessage, chatEngine, isReady];
}
