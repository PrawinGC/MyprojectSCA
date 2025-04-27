"use client";
import React, { useState } from "react";
import { FaTimes, FaSmile } from "react-icons/fa";

const ChatPortal = ({ item, onClose, currentUser }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [showEmojis, setShowEmojis] = useState(false);

  const emojis = ["😀", "😂", "😍", "😎", "👍", "🎉", "❤️", "🙏", "😢", "🔥"];

  const handleSend = () => {
    if (message.trim() === "") return;
    setMessages([...messages, { user: currentUser.name, text: message }]);
    setMessage("");
  };

  const handleEmojiClick = (emoji) => {
    setMessage((prev) => prev + emoji);
    setShowEmojis(false);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 backdrop-blur-sm bg-black/30">
      <div className="bg-white bg-opacity-90 p-6 rounded-xl w-[90%] max-w-md relative shadow-2xl">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
          onClick={onClose}
        >
          <FaTimes />
        </button>
        <h2 className="text-xl font-bold mb-4">Chat: {item.name}</h2>

        <div className="border h-64 overflow-y-auto p-3 bg-gray-50 rounded">
          {messages.map((msg, idx) => (
            <div key={idx} className="mb-2">
              <strong>{msg.user}: </strong>
              <span>{msg.text}</span>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2 mt-3">
          <button onClick={() => setShowEmojis(!showEmojis)} className="text-xl text-white ">
            <FaSmile />
          </button>
          <input
            className="flex-grow px-3 py-1 border color- black border rounded"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Type a message"
          />
          <button className="bg-blue-500 text-white px-4 py-1 rounded" onClick={handleSend}>
            Send
          </button>
        </div>

        {showEmojis && (
          <div className="flex flex-wrap mt-2 p-2 border rounded bg-white shadow">
            {emojis.map((emoji, i) => (
              <span
                key={i}
                className="text-2xl cursor-pointer m-1 hover:bg-gray-100"
                onClick={() => handleEmojiClick(emoji)}
              >
                {emoji}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatPortal;
