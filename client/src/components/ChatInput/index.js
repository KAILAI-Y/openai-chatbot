import React from 'react';
import './styles.css';

function ChatInput({ inputPrompt, setInputPrompt, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit} className="chatInputContainer">
      <input
        type="text"
        value={inputPrompt}
        onChange={(e) => setInputPrompt(e.target.value)}
        placeholder="Type your message..."
      />
      <button type="submit">Send</button>
    </form>
  );
}

export default ChatInput;
