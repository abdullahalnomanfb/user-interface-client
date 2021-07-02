import { Modal } from 'react-bootstrap';
import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
// import { PostContext } from './UserPostCard';
import { PostContext } from './UserPost';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const UpdateForm = ({ show, setShow, postInfo }) => {

    const [modify, setModify] = useContext(PostContext)


    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleClose = () => setShow(false);

    const onSubmit = (data) => {

        const id = postInfo._id
        const title = data.title;
        const body = data.body;
        const postDetails = { id, title, body }

        fetch(`https://immense-tor-26147.herokuapp.com/update/${id}`, {
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


                        <div className="form-group row w-75 text-center m-auto ">
                            <input className="form-control" defaultValue={postInfo.title} {...register("title")} /> <br />
                        </div><br />

                        <div className="form-group row m-auto w-75 ">

                            <textarea className="form-control" defaultValue={postInfo.body} {...register("body")} id="" cols="30" rows="7"></textarea>
                        </div>

                        <Modal.Footer style={{marginTop:"20px"}}>
                          <input className="btn-success px-4 py-2 rounded" type="submit" value="Update" />
                        </Modal.Footer>
                    </form>

                </Modal.Body>
            </Modal>
        </>
    );
};

export default UpdateForm;