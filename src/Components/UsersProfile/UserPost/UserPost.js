import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import SideBar from '../../Shared/SideBar/SideBar';
import UserPostCard from './UserPostCard';

export const PostContext = createContext()

const UserPost = () => {

    const [modify, setModify] = useState(1)
    const [logInUser, setLogInUser] = useContext(UserContext);
    const [post, setPost] = useState([])

    useEffect(() => {
        fetch(`https://immense-tor-26147.herokuapp.com/post?email=${logInUser.email}`)
            .then(res => res.json())
            .then(data => {
                setPost(data)
            })
    }, [modify])

    // console.log("post", post);
    return (
        <PostContext.Provider value={[modify, setModify]}>
            <div className="container-fluid ">
                <div className="row">
                    <SideBar />
                    <div style={{ backgroundColor: '#f0f2f5' }} className="col-md-10 pt-5 ">
                        {
                            post.length === 0 ? <h4 className="text-danger text-center">You didn't publish any post . Please Write a new post...</h4> : <h4 className="text-primary text-center">You have {post.length} post</h4>
                        }

                        <div className="row">
                            {
                                post.map(singlePost => <UserPostCard singlePost={singlePost} />)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </PostContext.Provider>
    );
};

export default UserPost;