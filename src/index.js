import React from 'react';
import ReactDOM from 'react-dom';
import ChatEngineCore from 'chat-engine'

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';




// publish key - pub-c-2b685952-cd8f-4dce-b18c-585f14fea059
// sub key - sub-c-0d466128-f809-11e8-a40a-12310f425d87

const PUBLISH_KEY = 'pub-c-56d67766-dce8-4de5-9fc5-5cc93cb4752e';
const SUBSCRIBE_KEY = 'sub-c-670dc974-f80b-11e8-a39c-e60c31199fb2';

const now = new Date().getTime();
const username = ['user', now].join('-');
 
const ChatEngine = ChatEngineCore.create({
    publishKey: PUBLISH_KEY,
    subscribeKey: SUBSCRIBE_KEY
}, {
    globalChannel: 'chat-engine-react'
});
ChatEngine.connect(username, {
  signedOnTime: now
}, 'auth-key');

ChatEngine.on('$.ready', () => {
    ReactDOM.render(<App chatEngine={ChatEngine}/>, document.getElementById('root'));
});


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
