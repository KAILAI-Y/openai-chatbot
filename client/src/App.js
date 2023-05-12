import React, { useState } from "react";
import ChatLog from "./components/ChatLog";
import ChatInput from "./components/ChatInput";
import "./App.css";

function App() {
  const [inputPrompt, setInputPrompt] = useState("");
  const [chatLog, setChatLog] = useState([]);
  // loading
  const [isLoading, setIsLoading] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (inputPrompt.trim() !== "") {
      setIsLoading(true);
  
      let botMessage = '';
      try {
        const response = await fetch("http://localhost:4000/", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: inputPrompt }),
        });

        // check HTTP status
        if (response.ok) {
          const data = await response.json();
          console.log(data)
          botMessage = data.data.content;
        } else {
          // status error
          console.error('Error:', response.status, response.statusText);
          botMessage = 'Sorry, there was an error processing your message.';
        }
      } catch (err) {
        console.error(err);
      }
    
      setChatLog(prevChatLog => [
        ...prevChatLog,
        { userMessage: inputPrompt, botMessage },
      ]);
  
      setIsLoading(false);
      setInputPrompt("");
    }
  };
  

  return (
    <div className="App">
      <h1>Chatbot</h1>
      <ChatLog chatLog={chatLog} />
      {isLoading && <p>Loading...</p>}
      <ChatInput 
        inputPrompt={inputPrompt}
        setInputPrompt={setInputPrompt}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;