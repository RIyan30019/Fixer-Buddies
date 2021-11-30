import React from 'react';
import './Footer.css'
import { FaFacebook } from 'react-icons/fa';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { ImLinkedin } from 'react-icons/im';
import { RiInstagramFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <section className="footer bg-footer py-5">
                <div className="container px-3 py-5 text-white">
                    <div className="row">
                        <div className="col-md-4 mb-2">
                            <h3 className="py-3">ABOUT US</h3>
                            <p>
                                Fixer Buddies offers professional laptop repair services at our retail locations throughout world. The high level of customer service has allowed to open multiple full-service repair centers.
                        </p>
                            <div className="social pt-5 mb-3">
                                <Link to='/facebook'><FaFacebook className="text-danger fs-3 mx-2"/></Link>
                                <Link to='/facebook'><AiFillTwitterCircle className="text-danger fs-4 mx-2"/></Link>
                                <Link to='/facebook'><ImLinkedin className="text-danger fs-3 mx-2"/></Link>
                                <Link to='/facebook'><RiInstagramFill className="text-danger fs-4 mx-2"/></Link>
                            </div> 
                        </div>
                        <div className="col-md-4 mb-2">
                            <h3 className="py-3 ps-3">CONTACT US</h3>
                            <ul className="list-group list-group-flush ">
                                <li style={{ background: 'none' }} className="list-group-item text-white">
                                    support-us@rgeeks.com
                                <br />
                                helpmenow@rgeeks.com
                            </li>
                                <li style={{ background: 'none' }} className="list-group-item text-white">
                                    Road-2,3/A East Shibgonj<br />
                                Sylhet-3100, Bangladesh
                            </li>
                                <li style={{ background: 'none' }} className="list-group-item text-white">
                                    Office:  (+880) 0823 560 433
                                <br />
                                Cell:  (+880) 0723 161 343
                            </li>
                            </ul>
                        </div>
                        <div className="col-md-4 mb-2">
                            <h3 className="py-3">OPENING HOURS</h3>
                            <ul style={{ background: 'none' }} className="list-group list-group-flush">
                                <li style={{ background: 'none' }} className="list-group-item d-flex justify-content-between border-dotted border-white text-white">
                                    <span>Sat - Tues :</span>
                                    <span>6.00 AM - 10.00 PM</span>
                                </li>
                                <li style={{ background: 'none' }} className="list-group-item d-flex justify-content-between border-dotted text-white border-white">
                                    <span>Wed - Thurs :</span>
                                    <span>8.00 AM - 6.00 PM</span>
                                </li>
                                <li style={{ background: 'none' }} className="list-group-item d-flex justify-content-between border-dotted text-white border-white">
                                    <span>Friday :</span>
                                    <span>6.00 AM - 10.00 PM</span>
                                </li>
                                <li style={{ background: 'none' }} className="list-group-item d-flex justify-content-between border-dotted text-white">
                                    <span>Sunday :</span>
                                    <span>Closed</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-dark py-4">
                <div className="row">
                    <div className="col-md-8 text-light mx-auto text-center">
                        Copyright © 2017-2018. All Right Reserved - by Ashraful-Mijan
                    </div>
                </div>
            </section>
        </>
    );
};

export default Footer;