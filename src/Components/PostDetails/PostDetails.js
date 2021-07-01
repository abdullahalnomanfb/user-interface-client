import React, { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NavBars from '../Shared/NavBars/NavBars';
import { useForm } from "react-hook-form";
import { UserContext } from '../../App';


const PostDetails = () => {

    const [logInUser, setLogInUser] = useContext(UserContext)
    const { _id } = useParams();
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])

    const findPost = posts.find(post => post._id == _id);
    // console.log(findPost);
    const { register, handleSubmit, formState: { errors } } = useForm();



    const onSubmit = data => {


        const commentDetails = {
            name: logInUser.name,
            email: logInUser.email,
            userId: _id,
            message: data.message,
            date: new Date().toDateString()
        }

        console.log(commentDetails);

        fetch('http://localhost:5000/addComment', {
            method: 'post',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(commentDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert("Message has send")
                }
            })
    }



    const [comments, setComments] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/comments/${_id}`)
            .then(res => res.json())
            .then(data => setComments(data))
    }, [])


    console.log("comments", comments);

    return (

        <>
            <NavBars />
            <div className="container mt-5 ">
                <p className="text-secondary">Biyans Who <span>20-07-2020</span>   </p>
                <h1 className="text-primary text-capitalize">{findPost?.title}</h1>
                <p className="text-capitalize mt-5">{findPost?.body}</p>

                <h6>{logInUser.name}</h6>
                {
                    comments.map(comment => <li key={comment.id}> {comment.message}</li>)
                }


                <div className="comment-form">
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <input className="form-control w-25" {...register("message", { required: true })} placeholder="Write a comment" />
                        {errors.message && <span className="text-danger">Message field is required</span>} <br /><br />
                        <button className="btn-primary py-2 px-3 rounded">Add Comment</button>
                    </form>
                </div>

            </div>
        </>
    );
};

export default PostDetails;