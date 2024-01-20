import React from 'react';
import './App.css';
import io from "socket.io-client";
import { useEffect } from "react";

const socket = io.connect("http://localhost:3001");

function App() {
  const sendMessage = () => {
    socket.emit("send_message", "hi");
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      alert(data);
    });
  }, [socket]);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
        <input placeholder="Message" />
        <button onClick={sendMessage}>Send</button>
      </header>
    </div>
  );
}

export default App;
