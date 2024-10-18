import { useState } from "react";
import "./Dashboard.css"
import "./ChatBot.css";

import Logo from '../assets/logo.svg'
const ChatBot = () => {
    const [messages, setMessages] = useState([
        { text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", sender: "bot" },
        { text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", sender: "user" },
        { text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", sender: "bot" },
        { text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", sender: "user" },
    ]);

    const [input, setInput] = useState("");

    const handleSendMessage = () => {
        if (input.trim()) {
            setMessages([...messages, { text: input, sender: "user" }]);
            setInput("");
        }
    };

    return (
        <>
            <Navbar />
            <div className="chatbot-container">
                <div className="messages-container">
                    {messages.map((msg, index) => (
                        <div key={index} className={`message ${msg.sender}`}>
                            <div className="logo-placeholder">NW</div>
                            <p>{msg.text}</p>
                        </div>
                    ))}
                </div>
                <div className="input-container">
                    <input
                        type="text"
                        placeholder="How can I help you?"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    />
                    <button onClick={handleSendMessage}>Send</button>
                </div>
            </div>
        </>
    );
};

// Navbar Component
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo"><img src={Logo}/></div>
            <div className="nav-links">
                <a href="#dashboard">Dashboard</a>
                <a href="#analytics">Analytics</a>
                <a href="#topology">Topology</a>
                <a href="#chatbot">ChatBot</a>
            </div>
            <div className="profile-icon">
                <img src="https://via.placeholder.com/40" alt="Profile" className="profile-img" />
            </div>
        </nav>
    );
};


export default ChatBot;
