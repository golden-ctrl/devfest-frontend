import './Dashboard.css'
import './Topology.css'
import Logo from "../assets/logo.svg";
const Topology = () => {
    return (
        <div className="container">
            <Navbar />

            <div className="content">
                <h2>Topology</h2>
                <div className="topology-container">
                    <div className="topology-node central-node">
                        <img src="https://img.icons8.com/ios-filled/50/4CAF50/home.png" alt="central"/>
                    </div>

                    <div className="line-vertical"></div>
                    <div className="line-horizontal">
                        <div className="horizontal-line-left"></div>
                        <div className="horizontal-line-right"></div>
                    </div>

                    <div className="topology-connection">
                        <div className="child-node">
                            <img src="https://img.icons8.com/ios-filled/50/000000/user.png" alt="client"/>
                        </div>
                        <div className="child-node">
                            <img src="https://img.icons8.com/ios-filled/50/000000/user.png" alt="client"/>
                        </div>
                        <div className="child-node">
                            <img src="https://img.icons8.com/ios-filled/50/000000/user.png" alt="client"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
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
export default Topology;
