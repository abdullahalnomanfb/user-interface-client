import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {faSignOutAlt, faHome, faPlus, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link, useParams } from 'react-router-dom';
import './SideBar.css';


const SideBar = () => {



    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4 sidebar-h">
            <ul className="list-unstyled">
                <li>
                    <Link to='/' className="text-white">
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </Link>
                </li>

                <li>
                    <Link to="/addPost" className="text-white">
                        <FontAwesomeIcon icon={faPlus} /> <span>Add new post</span>
                    </Link>
                </li>

                
                <li>
                    <Link to="/myPost" className="text-white">
                        <FontAwesomeIcon icon={faUser} /> <span>My post</span>
                    </Link>
                </li>

            </ul>
            <div className="log-out">
                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default SideBar;