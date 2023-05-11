import React, { useState } from "react";
import ChatLog from "./components/ChatLog";
import ChatInput from "./components/ChatInput";
import "./App.css";

function App() {
  const [inputPrompt, setInputPrompt] = useState("");
  const [chatLog, setChatLog] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (inputPrompt.trim() !== "") {
      setChatLog([...chatLog, { userMessage: inputPrompt }]);
      
      try {
        const response = await fetch("http://localhost:4000/", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: inputPrompt }),
        });
        const data = await response.json();
        console.log(inputPrompt)
        console.log(data)
        setChatLog([
          ...chatLog,
          { userMessage: inputPrompt, botMessage: data.data.content },
        ]);
      } catch (err) {
        console.error(err);
      }

      setInputPrompt("");
    }
  };

  return (
    <div className="App">
      <h1>Chatbot</h1>
      <ChatLog chatLog={chatLog} />
      <ChatInput 
        inputPrompt={inputPrompt}
        setInputPrompt={setInputPrompt}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;