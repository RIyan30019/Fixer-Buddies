import React, { useContext, useEffect, useState } from "react";
import { FaShoppingCart } from 'react-icons/fa';
import { SiBuymeacoffee } from 'react-icons/si';
import { RiMessage2Fill } from 'react-icons/ri';

import { FaListUl } from 'react-icons/fa';
import { IoMdAdd } from 'react-icons/io';
import { MdPersonAdd } from 'react-icons/md';
import { SiManageiq } from 'react-icons/si';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";
import Order from "./Order/Order";
import Review from "./Review/Review";
import OrderList from "./OrderList/OrderList";
import ServiceList from "./ServiceList/ServiceList";
import AddService from "./AddService/AddService";
import ManageServices from "./ManageServices/ManageServices";
import MakeAdmin from "./MakeAdmin/MakeAdmin";
import { UserContext } from "../../App";

function Dashboard() {
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

    const { id } = useParams()

    const routes = [
        {
            path: `/makeOrder/${id}`,
            exact: true,
            sidebar: () => <div>service list!</div>,
            main: () => <Order id={id} />
        },
        {
            path: "/dashboard",
            exact: true,
            sidebar: () => <div>service list!</div>,
            main: () => <Order />
        },
        {
            path: "/order",
            exact: true,
            sidebar: () => <div>service list!</div>,
            main: () => <Order />
        },
        {
            path: "/orderList",
            exact: true,
            sidebar: () => <div>service list!</div>,
            main: () => <OrderList />
        },
        {
            path: "/review",
            sidebar: () => <div>add service!</div>,
            main: () => <Review />
        },
        {
            path: "/serviceList",
            sidebar: () => <div>list!</div>,
            main: () => <ServiceList />
        },
        {
            path: "/addService",
            sidebar: () => <div>list!</div>,
            main: () => <AddService/>
        },
        {
            path: "/makeAdmin",
            sidebar: () => <div>list!</div>,
            main: () => <MakeAdmin/>
        },
        {
            path: "/manageService",
            sidebar: () => <div>list!</div>,
            main: () => <ManageServices/>
        },
    ];

    return (
        <Router>
            <div style={{ display: "flex" }}>
                <div className="px-3 py-5 bg-dark"
                    style={{
                        width: "20%",
                        height: '100vh'
                    }}
                >
                    <ul className='fs-5' style={{ listStyleType: "none", padding: '0' }}>
                        { !isAdmin &&
                            <div>
                                <li className='py-1'>
                                    <FaShoppingCart className="text-light me-2" />
                                    <Link to="/order" className="text-light text-decoration-none">Order</Link>
                                </li>
                                <li className='py-1'>
                                    <SiBuymeacoffee className="text-light me-2" />
                                    <Link to="/orderList" className="text-light text-decoration-none">Order List</Link>
                                </li>
                                <li className='py-1'>
                                    <RiMessage2Fill className="text-light me-2" />
                                    <Link to="/review" className="text-light text-decoration-none">Review</Link>
                                </li>
                            </div>
                        }

                        {isAdmin &&
                            <div>
                                <li className='py-1'>
                                    <FaListUl className="text-light me-2" />
                                    <Link to="/serviceList" className="text-light text-decoration-none">Service List</Link>
                                </li>
                                <li className='py-1'>
                                    <IoMdAdd className="text-light me-2" />
                                    <Link to="/addService" className="text-light text-decoration-none">Add Service</Link>
                                </li>
                                <li className='py-1'>
                                    <MdPersonAdd className="text-light me-2" />
                                    <Link to="/makeAdmin" className="text-light text-decoration-none">Make Admin</Link>
                                </li>
                                <li className='py-1'>
                                    <SiManageiq className="text-light me-2" />
                                    <Link to="/manageService" className="text-light text-decoration-none">Manage Service</Link>
                                </li>
                            </div>
                        }
                    </ul>

                    <Switch>
                        {routes.map((route, index) => (

                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                children={<route.sidebar />}
                            />
                        ))}
                    </Switch>
                </div>

                <div style={{ flex: 1, padding: "10px" }}>
                    <Switch>
                        {routes.map((route, index) => (
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                children={<route.main />}
                            />
                        ))}
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default Dashboard;
