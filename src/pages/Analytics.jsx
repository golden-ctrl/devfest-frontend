import Logo from "../assets/logo.svg";
import './Dashboard.css'
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
const Analytics = ()=>{
    const data = {
        labels: ['8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm'],
        datasets: [
            {
                label: 'Number of users',
                data: [50, 100, 200, 300, 150, 150, 250, 350],
                fill: true,
                borderColor: '#4CAF50',
                backgroundColor: 'rgba(76, 175, 80, 0.2)',
                tension: 0.4,
            },
        ],
    };

    // Chart options
    const options = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };
    return (
        <>
            <Navbar/>
            <div className="container">
                <div className="content">
                    <h2>Network Evaluation</h2>
                    <div className="tab-menu">
                        <button className="tab-btn active">Traffic Analytics</button>
                        <button className="tab-btn">Network Performance</button>
                    </div>

                    <div className="graph-section">
                        <h3>Graph description</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.</p>

                        <div className="chart-container" style={{width: '1200px', height: '650px'}}>
                            <Line data={data} options={options}/>
                        </div>
                    </div>

                    <button className="report-btn">Make a report</button>
                </div>
            </div>

        </>
    )
}
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
                <img src="https://via.placeholder.com/40" alt="Profile" className="profile-img"/>
            </div>
        </nav>
    );
};
export default Analytics;