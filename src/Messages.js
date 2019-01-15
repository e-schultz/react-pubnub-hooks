import React from 'react';

const Messages = ({ messages }) => {
  return (
    <ul>
      {messages.map(n => {
        return (
          <li>
            {n.sender} - {n.text}
          </li>
        );
      })}
    </ul>
  );
};

export default Messages;
