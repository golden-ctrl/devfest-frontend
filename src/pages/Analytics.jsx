import Logo from "../assets/logo.svg";
import './Dashboard.css'
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import { Link } from 'react-router-dom'
import profile_pic from '../assets/Vector.png'
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
            <Link to="/dashboard">Dashboard</Link>
                <Link to="/analytics">Analytics</Link>
                <Link to="/topology">Topology</Link>
                <Link to="/chatBot">ChatBot</Link>
            </div>
            
            <div className="profile-icon"><img src={profile_pic}  /></div>
            
        </nav>
    );
};
export default Analytics;