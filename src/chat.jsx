import React, { useState, useRef, useEffect } from "react";
import "./Chat.css";

const Chat = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: "agent", text: "Hello 👋 How can I help you today?" }
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  // Auto scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = {
      id: Date.now(),
      sender: "customer",
      text: input
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");

    // Auto agent reply
    setTimeout(() => {
      autoReply(input);
    }, 1200);
  };

  const autoReply = (userText) => {
    let reply = "Thanks for reaching out! 😊";

    if (userText.toLowerCase().includes("hello")) {
      reply = "Hello! How can I assist you today?";
    } else if (userText.toLowerCase().includes("price")) {
      reply = "Our pricing depends on your plan. Would you like details?";
    } else if (userText.toLowerCase().includes("help")) {
      reply = "Sure! Please tell me what you need help with.";
    }else if (userText.toLowerCase().includes("hai")) {
      reply = "Sure! Please tell me what you need help with.";
    }

    setMessages(prev => [
      ...prev,
      {
        id: Date.now() + 1,
        sender: "agent",
        text: reply
      }
    ]);
  };

  return (
    <div className="chat-wrapper">
      <div className="chat-container">

        {/* Header */}
        <div className="chat-header">
          <div>
            <h3>Customer Support</h3>
            <span className="status">● Online</span>
          </div>
        </div>

        {/* Messages */}
        <div className="chat-body">
          {messages.map(msg => (
            <div key={msg.id} className={`chat-row ${msg.sender}`}>
              <div className="avatar">
                {msg.sender === "agent" ? "🧑‍💼" : "🙂"}
              </div>

              <div className={`chat-message ${msg.sender}`}>
                <p>{msg.text}</p>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="chat-footer">
          <input
            type="text"
            placeholder="Type a message..."
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === "Enter" && sendMessage()}
          />
          <button onClick={sendMessage}>➤</button>
        </div>

      </div>
    </div>
  );
};

export default Chat;
