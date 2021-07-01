import { Modal } from 'react-bootstrap';
import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
// import { PostContext } from './UserPostCard';
import { useState } from 'react';
import { PostContext } from './UserPost';


const UpdateForm = ({ show, setShow, postInfo }) => {

     const [modify,setModify]=useContext(PostContext)

      console.log("modify",modify);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleClose = () => setShow(false);


    const[ count,setCount]=useState(1)
    const onSubmit = (data) => {

        const id = postInfo._id
        const title = data.title;
        const body = data.body;
        const postDetails = { id, title, body }

        fetch(`http://localhost:5000/update/${id}`, {
            method: 'PATCH',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(postDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    setModify(modify * 2)
                    // setCount(count+1)

                }
            })
        setShow(false)

    };

    return (

        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Post</Modal.Title>
                </Modal.Header>
                <Modal.Body>


                    <form onSubmit={handleSubmit(onSubmit)}>

                        <input defaultValue={postInfo.title} {...register("title")} /> <br />

                        <input defaultValue={postInfo.body} {...register("body")} /> <br />
                        {/* 
                        <div className="form-group row">
                            <input  {...register("exampleRequired", { required: true })} /> <br />
                            {errors.exampleRequired && <span className="text-danger">This field is required</span>} <br />
                        </div>  */}

                        <Modal.Footer>
                            <input className="btn-success px-4 py-2 rounded" type="submit" value="Update" />
                        </Modal.Footer>
                    </form>

                </Modal.Body>
            </Modal>
        </>
    );
};

export default UpdateForm;