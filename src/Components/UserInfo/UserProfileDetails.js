import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NavBars from '../Shared/NavBars/NavBars';

const UserProfileDetails = () => {

    const { id } = useParams()


    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))

    }, [])

    const findUser = users?.find(user => user?.id == id);


    console.log(findUser);

    return (
        <>
            <NavBars />

            <div className="container-fluid">
                <div className="row">

                    <div className="col-md-10 text-center">
                        <h1>Name: <span className="text-primary">{findUser?.name}</span></h1>
                        <h5> userName : <span className="text-secondary">{findUser?.username}</span></h5>
                        <h5> phone : <span className="text-secondary">{findUser?.phone}</span></h5>
                    </div>
                </div>

            </div>

        </>
    );
};

export default UserProfileDetails;