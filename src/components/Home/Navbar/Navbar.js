import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import './Navbar.css'
const Navbar = () => {
    const [isAdmin, setAdmin] = useState(false)
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    useEffect(() => {
        fetch('https://fathomless-river-35723.herokuapp.com/loginBaseEmail', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setAdmin(data)
            })
    }, [loggedInUser.email])

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-color fw-bold">
            <div className="container">
                <Link className="navbar-brand text-uppercase text-white" to="/"><span className="text-warning">Fixer</span> Buddies</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto ">
                        <Link className="nav-link text-white" aria-current="page" to="/">Home</Link>
                        <Link className="nav-link text-white" aria-current="page" to="/">About Us</Link>
                        <Link className="nav-link text-white" aria-current="page" to="/">Contact Us</Link>
                        <Link className="nav-link text-white" to="dashboard">Dashboard</Link>
                        <Link className="nav-link text-white" to="/login">Login</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;