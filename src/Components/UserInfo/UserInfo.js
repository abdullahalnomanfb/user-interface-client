import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SideBar from '../Shared/SideBar/SideBar';
import './UserInfo.css';

const UserInfo = () => {





    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))

    }, [])



    return (

        <div className="container-fluid">
            <div className="row mb-5">
                <SideBar />
                <div className="col-md-10 ">

                    <thead>
                        <tr>
                            <th >Name</th>
                            <th>E-mail</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    {
                        users.map(user =>
                            <tbody className="tbody ">

                                <tr>
                                    <Link to={`/users/profile/${user.id}`}>   <td> {user.name}</td></Link>
                                    <td>{user.email}</td>
                                    <td> {user.username}</td>
                                </tr>
                            </tbody>)
                    }
                </div>

            </div>
        </div>

    );
};

export default UserInfo;