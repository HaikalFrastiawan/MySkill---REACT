import React from 'react';
import { createRoot } from 'react-dom/client';

class Message extends React.Component {
  render() {
    return (
      <div>
        <small>{this.props.sender}:</small>
        <p>{this.props.content}</p>
      </div>
    );
  }
}

class ChatBox extends React.Component {
  render() {
    return (
      <div>
        <Message sender='Haikal' content='kamu laper?' />
        <Message sender='Repan' content='iyaa' />
      </div>
    );
  }
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<ChatBox />);

