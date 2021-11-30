// import React from "react";
// import { FaListUl } from 'react-icons/fa';
// import { IoMdAdd } from 'react-icons/io';
// import { MdPersonAdd } from 'react-icons/md';
// import { SiManageiq } from 'react-icons/si';
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
// } from "react-router-dom";
// import AddService from "../AddService/AddService";
// import MakeAdmin from "../MakeAdmin/MakeAdmin";
// import ManageServices from "../ManageServices/ManageServices";
// import ServiceList from "../ServiceList/ServiceList";

// function Admin() {
//     const routes = [
//         {
//             path: "/admin",
//             exact: true,
//             sidebar: () => <div>service list!</div>,
//             main: () => <ServiceList />
//         },
//         {
//             path: "/serviceList",
//             exact: true,
//             sidebar: () => <div>service list!</div>,
//             main: () => <ServiceList />
//         },
//         {
//             path: "/addService",
//             sidebar: () => <div>add service!</div>,
//             main: () => <AddService />
//         },
//         {
//             path: "/makeAdmin",
//             sidebar: () => <div>make admin!</div>,
//             main: () => <MakeAdmin />
//         },
//         {
//             path: "/manageService",
//             sidebar: () => <div>Manage</div>,
//             main: () => <ManageServices/>
//         }
//     ];

//     return (
//         <Router>
//             <div style={{ display: "flex" }}>
//                 <div className="px-3 py-5 bg-dark"
//                     style={{
//                         width: "20%",
//                         height: '100vh'
//                     }}
//                 >
//                     <ul className='fs-5' style={{ listStyleType: "none", padding: '0' }}>

//                         <li className='py-1'>
//                             <FaListUl className="text-light me-2" />
//                             <Link to="/serviceList" className="text-light text-decoration-none">Service list</Link>
//                         </li>
//                         <li className='py-1'>
//                             <IoMdAdd className="text-light me-2" />
//                             <Link to="/addService" className="text-light text-decoration-none">Add Service</Link>
//                         </li>
//                         <li className='py-1'>
//                             <MdPersonAdd className="text-light me-2" />
//                             <Link to="/makeAdmin" className="text-light text-decoration-none">Make Admin</Link>
//                         </li>
//                         <li className='py-1'>
//                             <SiManageiq className="text-light me-2" />
//                             <Link to="/manageService" className="text-light text-decoration-none">Manage Services</Link>
//                         </li>

//                     </ul>

//                     <Switch>
//                         {routes.map((route, index) => (

//                             <Route
//                                 key={index}
//                                 path={route.path}
//                                 exact={route.exact}
//                                 children={<route.sidebar />}
//                             />
//                         ))}
//                     </Switch>
//                 </div>

//                 <div style={{ flex: 1, padding: "10px" }}>
//                     <Switch>
//                         {routes.map((route, index) => (
//                             <Route
//                                 key={index}
//                                 path={route.path}
//                                 exact={route.exact}
//                                 children={<route.main />}
//                             />
//                         ))}
//                     </Switch>
//                 </div>
//             </div>
//         </Router>
//     );
// }

// export default Admin;
