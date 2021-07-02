import React, { useContext } from 'react';
import SideBar from '../../Shared/SideBar/SideBar';
import { useForm } from "react-hook-form";
import './AddPost.css';
import { UserContext } from '../../../App';

const AddPost = () => {

    const [logInUser, setLogInUser] = useContext(UserContext);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data, e) => {
        const postDetails = {
            title: data.title,
            body: data.content,
            name: logInUser.name,
            email: logInUser.email,
            date: new Date().toDateString()
        }
        const postMethod = {
            method: 'POST',
            headers: { 'content-Type': 'application/json' },
            body: JSON.stringify(postDetails)
        }

        fetch('https://immense-tor-26147.herokuapp.com/addPost', postMethod)
            .then(res => res.json())
            .then(result => {
                if (result) {
                    alert("Post has been publish")
                }
                e.target.reset()
            })
    };
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <SideBar />
                    <div style={{ backgroundColor: "#f0f2f5" }} className="col-md-10">
                        <h4 className="text-center pt-3">Hello, <span className="text-primary">{logInUser.name}</span> Let's write a post..</h4>
                        <div className="add-post-form">
                            <form className="mt-5 p-5 w-70" onSubmit={handleSubmit(onSubmit)}>
                                <label for="exampleFormControlInput1" class="form-label">Add post title</label><br />
                                <input className="form-control" {...register("title", { required: true })} />
                                {errors.title && <span className="error">Title field is required</span>} <br />


                                <label for="exampleFormControlTextarea1" class="form-label">Add post content</label>
                                <textarea className="form-control" cols="20" rows="8" {...register("content", { required: true })} />
                                {errors.content && <span className="error">Content field is require
                                </span>} <br />

                                <div className="text-center">
                                    <input type="submit" value="Save" className="btn-primary py-2 px-4 rounded" />
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddPost;