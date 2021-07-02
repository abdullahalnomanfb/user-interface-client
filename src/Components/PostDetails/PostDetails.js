import React, { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NavBars from '../Shared/NavBars/NavBars';
import { useForm } from "react-hook-form";
import { UserContext } from '../../App';
import PostDetailsCard from './PostDetailsCard';


const PostDetails = () => {

    const [logInUser, setLogInUser] = useContext(UserContext)
    const { _id } = useParams();
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('https://immense-tor-26147.herokuapp.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])

    const findPost = posts.find(post => post._id == _id);
    // console.log(findPost);
    const { register, handleSubmit, formState: { errors } } = useForm();



    const [comments, setComments] = useState([])

    const [modifyComment, setModifyComment] = useState(1)

    // console.log("modify",modifyComment);

    useEffect(() => {
        fetch(`https://immense-tor-26147.herokuapp.com/comments/${_id}`)
            .then(res => res.json())
            .then(data => setComments(data))
    }, [modifyComment])



    const onSubmit = (data, e) => {


        const commentDetails = {
            name: logInUser.name,
            email: logInUser.email,
            userId: _id,
            message: data.message,
            date: new Date().toDateString()
        }



        fetch('https://immense-tor-26147.herokuapp.com/addComment', {
            method: 'post',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(commentDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    // alert("Message has send")
                    setModifyComment(modifyComment + 1)
                }
            })

        e.target.reset()
    }





    // console.log("comments", comments);

    return (

        <>
            <NavBars />
            <div className="container mt-5 ">
                
                <h1 className="text-primary text-capitalize">{findPost?.title}</h1>
                <p className="text-capitalize mt-5">{findPost?.body}</p>

                {
                    comments.map(comment => <PostDetailsCard key={comment._id} comment={comment} />)
                }


                <div className="comment-form">
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <input className="form-control w-25" {...register("message", { required: true })} placeholder="Write a comment" />
                        {errors.message && <span className="text-danger">Message field is required</span>} <br />
                        <button className="btn-success py-2 px-3 rounded mb-5">Add Comment</button>
                    </form>
                </div>

            </div>
        </>
    );
};

export default PostDetails;