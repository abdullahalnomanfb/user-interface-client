import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import UsersCard from './UsersPostsCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';

const UsersPosts = () => {

    const [totalPosts, setTotalPosts] = useState([]);
    const [visible, setVisible] = useState(9)


    const [search,setSearch]=useState('')

    console.log("search",search);


    useEffect(() => {
        const url = `http://localhost:5000/posts?search=${search}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTotalPosts(data))
    }, [search])

    

    const reverse =[...totalPosts.reverse()]
    console.log("totalPost",totalPosts.reverse());

    const showMoreItems = () => {
        setVisible(visible + 9)
    }

    const handleChange =(e)=>{
        setSearch(e.target.value)
    }

    
    return (
        <div style={{ backgroundColor: "#f5f7ff" }} >
            <div className="container">
                <div style={{width:"500px"}} className="text-center pt-5 d-flex m-auto">
                    <input className="form-control w-50 mr-3" type="text" name="search" id="" onChange={handleChange}  placeholder="Search Post by title"/> <button className="btn-success px-2 py-2 rounded">Search Post</button>
                </div>
                {
                   (search !== '' && totalPosts.length ===0) && <h5 className="text-danger text-center mt-4" >No Result found:</h5>
                }
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

export default UsersPosts;