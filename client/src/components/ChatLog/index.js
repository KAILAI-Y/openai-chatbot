import React, { useEffect, useRef } from 'react';
import './styles.css';

function ChatLog({ chatLog }) {
  const chatLogRef = useRef(null);

  useEffect(() => {
    if (chatLogRef.current) {
      chatLogRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, [chatLog]);

  return (
    <div className="chatContainer">
      {chatLog.map((chat, idx) => (
        <div key={idx} ref={chatLogRef} className='message'>
          <p className='user-message'>
            <strong>User:</strong> {chat.userMessage}
          </p>
          {chat.botMessage && (
          <p className='bot-message'>
            <strong>Bot:</strong> {chat.botMessage}
          </p>
          )}
        </div>
      ))}
    </div>
  );
}

export default ChatLog;
