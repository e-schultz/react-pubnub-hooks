import React from "react";
import { withChatInput, withMessages } from "./chat.hooks";

import "./App.css";




/*class App extends Component {
  constructor(props) {
    super(props);
    this.chatEngine = this.props.chatEngine;
    this.state = {
      messages: [],
      chatInput: ""
    };
  }

  componentDidMount() {

    ChatEngine.global.on("message", payload => {
      let messages = this.state.messages;
      
      messages.push({
        sender: payload.sender.uuid,
        text: payload.data.text 
      });
      this.setState({
        messages: messages
      });
    });
  }
  setChatInput(event) {
    this.setState({ chatInput: event.target.value });
  }
  sendChat() {
    if (this.state.chatInput) {
      ChatEngine.global.emit("message", {
        text: this.state.chatInput
      });
      this.setState({ chatInput: "" });
    }
  }

  _handleKeyPress(e) {
    if (e.key === "Enter") {
      this.sendChat();
    }
  }
  render() {
    return (
      <div className="App">
        <ul>
          {this.state.messages.map(n => {
            return <li>{n.sender} - {n.text}</li>;
          })}
        </ul>
        <input
          id="chat-input"
          type="text"
          name=""
          value={this.state.chatInput}
          onChange={e => this.setChatInput(e)}
          onKeyPress={e => this._handleKeyPress(e)}
        />{" "}
        <input type="button" onClick={(e)=>this.sendChat(e)} value="Send Chat" />
      </div>
    );
  }
}*/

const App = () => {
  const [chatInput, setChatInput] = withChatInput();
  const [messages, sendMessage] = withMessages();
  
  return (
    <div>
      <ul>
        {messages.map(n => {
          return (
            <li>
              {n.sender} - {n.text}
            </li>
          );
        })}
      </ul>
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
