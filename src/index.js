import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import { ChatContextProvider } from './chat-engine';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import { getChatEngine } from './chat-engine';

// const ChatEngine = getChatEngine();

// publish key - pub-c-2b685952-cd8f-4dce-b18c-585f14fea059
// sub key - sub-c-0d466128-f809-11e8-a40a-12310f425d87

// ChatEngine.on('$.ready', () => {
ReactDOM.render(
  <ChatContextProvider>
    <App />
  </ChatContextProvider>,
  document.getElementById('root')
);
// });

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
