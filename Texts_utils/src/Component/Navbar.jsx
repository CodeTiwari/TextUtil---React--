import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './component/About';
function Navbar() {
    // State to track whether dark mode is enabled
    const [darkMode, setDarkMode] = useState(false);
    // State to track the selected color
    const [selectedColor, setSelectedColor] = useState("#000000");

    // Function to toggle dark mode
    const toggleDarkMode = () => {
        setDarkMode(!darkMode); // Toggle the current value of darkMode
        // Add logic to enable/disable dark mode here
        // For example, you can add a class to the body tag to apply dark mode styles
        if (!darkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }

    // Function to handle color change
    const handleColorChange = (event) => {
        setSelectedColor(event.target.value);
            document.body.style.backgroundColor = event.target.value;
       
    }

    return (
        <nav className={`navbar navbar-expand-lg ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <div className="form-check mx-3">
                            <input className="form-control form-control-color" type="color" id="colorPicker" value={selectedColor} onChange={handleColorChange} />
                            <label className="form-check-label" htmlFor="colorPicker">Choose Color</label>
                        </div>
                        <div className="form-check form-switch" style={{ padding: '10px 50px' }}>
                            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onChange={toggleDarkMode} />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
                        </div>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
