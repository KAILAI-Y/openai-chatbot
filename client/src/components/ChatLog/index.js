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
        <div key={idx}>
          <p><strong>User:</strong> {chat.userMessage}</p>
          {chat.botMessage && <p><strong>Bot:</strong> {chat.botMessage}</p>}
        </div>
      ))}
      <div ref={chatLogRef}></div>
    </div>
  );
}

export default ChatLog;
