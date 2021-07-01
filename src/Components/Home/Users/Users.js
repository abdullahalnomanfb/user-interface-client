import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import UsersCard from './UsersCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';

const Users = () => {

    const [totalPosts, setTotalPosts] = useState([]);
    const [visible, setVisible] = useState(9)

    useEffect(() => {
        const url = "http://localhost:5000/posts";
        fetch(url)
            .then(res => res.json())
            .then(data => setTotalPosts(data))
    }, [])


    const reverse =[...totalPosts.reverse()]
    
    console.log("totalPost",totalPosts.reverse());

    const showMoreItems = () => {

        setVisible(visible + 9)
    }
    return (
        <div style={{ backgroundColor: "#f5f7ff" }} >
            <div className="container">
                <h2 className="py-4">Recent Post</h2>
                <div className="row">
                    {
                        reverse.slice(0, visible).map(user => < UsersCard key={user.id} user={user} />)
                    }

                </div>
                <div className="text-center my-3">
                    <button className=" rounded my-5 btn  francy-btn"
                        onClick={showMoreItems}
                    >Load more</button>
                    <a href="#" className="arrow-up"> <FontAwesomeIcon icon={faAngleDoubleUp} /></a>
                </div>
            </div>
        </div>
    );
};

export default Users;