import React from "react";
import { Link } from 'react-router-dom';
import logo from './image/education-icon1.png';
import bg from './image/storytelling.jpg';
import './style.css';

function HomePage() {
    return (<>
        <div style={{ "min-height": "100%", "background": `url(${bg})`, "background-size": "cover", "background-blend-mode": "multiply" }}>
            <div className="navbar navbar-expand-lg bg-primary">
                <a class="navbar-brand" href="#">
                    <img src={logo} width="50" height="50" alt="Logo" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to='/'>Home<span class="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/getAll'>All Student</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/getStud'>Student</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/addStud'>Add</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/updateStud">Update</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/deleteStud">Delete</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#">Disabled</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </>)
}

export default HomePage;