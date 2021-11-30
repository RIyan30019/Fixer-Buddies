import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.Config'
import { Link, useHistory, useLocation } from 'react-router-dom';
import './login.css'
import { FcGoogle } from 'react-icons/fc';
import { UserContext } from '../../../App';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}

const Login = () => {
    let history = useHistory()
    let location = useLocation()
    let { from } = location.state || { from: { pathname: "/" } };

    var provider = new firebase.auth.GoogleAuthProvider();

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    function GoogleSingIn() {
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const newUser = {
                    email: result.user.email,
                    name: result.user.displayName,
                    image: result.user.photoURL
                }
                setLoggedInUser(newUser)
                storeAuthToken()
                history.replace(from);
            }).catch((error) => {

                var errorMessage = error.message;
                console.log(errorMessage)
            });
    }

    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
          .then(function (idToken) {
            sessionStorage.setItem('token', idToken);
            history.replace(from);
          }).catch(function (error) {
            // Handle error
          });
      }

    return (
        <div className="container-fluid login-form d-flex align-items-center justify-content-center bg-dark">
            <div className="text-center col-md-6 ">
                <div className='pb-4'>
                    <Link className="navbar-brand fw-bold text-uppercase text-light" to="/"><span className="text-warning">Fixer</span> Buddies</Link>
                </div>
                <div className="bg-light p-5 h-75 border border-warning">
                    <h3 className="text-center fw-bold">Login With</h3>
                    <button onClick={GoogleSingIn} className="btn btn-outline-danger rounded-pill my-5 ">
                        <FcGoogle className="fs-3" /> <span className="px-5">Continue With Google</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;