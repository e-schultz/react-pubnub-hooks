import ChatEngineCore from "chat-engine";

const PUBLISH_KEY = "pub-c-56d67766-dce8-4de5-9fc5-5cc93cb4752e";
const SUBSCRIBE_KEY = "sub-c-670dc974-f80b-11e8-a39c-e60c31199fb2";

let ChatEngine;

export const getChatEngine = () => {
  if (!ChatEngine) {
    const now = new Date().getTime();
    const username = ["user", now].join("-");

    ChatEngine = ChatEngineCore.create(
      {
        publishKey: PUBLISH_KEY,
        subscribeKey: SUBSCRIBE_KEY
      },
      {
        globalChannel: "chat-engine-react"
      }
    );

    ChatEngine.connect(
      username,
      {
        signedOnTime: now
      },
      "auth-key"
    );
  }

  return ChatEngine;
};

// ChatEngine.on('$.ready', () => {
//    ReactDOM.render(<App chatEngine={window.ChatEngine}/>, document.getElementById('root'));
// });
