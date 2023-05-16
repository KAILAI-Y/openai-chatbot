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
          <div className='user'>
            <div className='user-avatar'>
              <i className="iconfont">&#xe7ae;</i>
            </div>
            <div className='user-prompt'>{chat.userMessage}</div>
          </div>
          {chat.botMessage && (<div className='bot'>
            <div className='bot-avatar'>
              <i className="iconfont">&#xe644;</i>
            </div>
            <div className='bot-response'>
              <span
                  dangerouslySetInnerHTML={{
                    __html: chat.botMessage.replace(/\n/g, "<br />")
                  }}
              />
            </div>
          </div>)}
        </div>
      ))}
    </div>
  );
}

export default ChatLog;
