import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const Nav = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    return (
        <nav className="navbar navbar-light bg-dark">
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1">
                    <Link className="text-uppercase text-white text-decoration-none" to="/"><span className="text-warning">Fixer</span> Buddies</Link>
                </span>
                <span className="navbar-brand mb-0 text-light">
                    <img src={loggedInUser.image} alt="" className="w-50 rounded-circle"/>
                    
                </span>
            </div>
        </nav>
    );
};

export default Nav;