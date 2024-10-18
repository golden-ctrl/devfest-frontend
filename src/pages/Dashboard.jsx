import { useState } from "react";
import Logo from '../assets/logo.svg'
import "./Dashboard.css";

// Sample data for network tracking
const initialData = [
    { clientId: "4736829", time: "8:00 pm", requestedBw: "15 Mb/s", allocatedBw: "20 Mb/s", connected: true },
    { clientId: "4736829", time: "8:00 pm", requestedBw: "15 Mb/s", allocatedBw: "20 Mb/s", connected: true },
    { clientId: "4736829", time: "8:00 pm", requestedBw: "15 Mb/s", allocatedBw: "20 Mb/s", connected: true },
    // Add more data entries as needed
];

const Dashboard = () => {
    const [clients, setClients] = useState(initialData);

    const handleConnect = (index) => {
        const updatedClients = [...clients];
        updatedClients[index].connected = true;
        setClients(updatedClients);
    };

    const handleDisconnect = (index) => {
        const updatedClients = [...clients];
        updatedClients[index].connected = false;
        setClients(updatedClients);
    };

    const handleAdjustBandwidth = (index) => {
        const newBandwidth = prompt("Enter new bandwidth (e.g., 25 Mb/s):");
        if (newBandwidth) {
            const updatedClients = [...clients];
            updatedClients[index].allocatedBw = newBandwidth;
            setClients(updatedClients);
        }
    };

    return (
        <>
            <Navbar />
            <div className="dashboard-container">
                <h1 className="dashboard-title">Network Tracking</h1>
                <table className="dashboard-table">
                    <thead>
                    <tr>
                        <th>Client ID</th>
                        <th>Time</th>
                        <th>Requested bw</th>
                        <th>Allocated bw</th>
                        <th>Control Panel</th>
                    </tr>
                    </thead>
                    <tbody>
                    {clients.map((client, index) => (
                        <tr key={index}>
                            <td>{client.clientId}</td>
                            <td>{client.time}</td>
                            <td>{client.requestedBw}</td>
                            <td>{client.allocatedBw}</td>
                            <td>
                                {client.connected ? (
                                    <button className="button disconnect" onClick={() => handleDisconnect(index)}>
                                        Disconnect
                                    </button>
                                ) : (
                                    <button className="button connect" onClick={() => handleConnect(index)}>
                                        Connect
                                    </button>
                                )}
                                <button className="button adjust" onClick={() => handleAdjustBandwidth(index)}>
                                    Adjust bw
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
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

export default Dashboard;
