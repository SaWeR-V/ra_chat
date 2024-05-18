import React from 'react';
import { messages } from './components/messages';
import { MessageHistory } from './components/MessageHistory';

import './App.css';

function App() {
  return (
    <div className="clearfix container">
        <div className="chat">
          <div className="chat-history">
            <MessageHistory list={messages}/>
          </div>
      </div>  
    </div>
  );
}

export default App;
