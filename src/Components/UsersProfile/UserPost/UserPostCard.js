import React from 'react';
import { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import UpdateForm from './UpdateForm';

const UserPostCard = (props) => {

    const { _id, title, body, email } = props.singlePost;

    const handleDelete = (_id, e) => {
        fetch(`http://localhost:5000/delete/${_id}`, { method: 'DELETE' })
            .then(res => {
                e.target.parentNode.parentNode.parentNode.style.display = "none";
            })
    }

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);

    const postInfo = props.singlePost;
    return (
        <>
        <div className="col-md-4 mb-5">
            <Card >
                <Card.Body className="card-hover">
                    <Card.Title>{email}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{title}</Card.Subtitle>
                    <Card.Text>
                        {body}
                    </Card.Text>
                    <Button className="btn-success mx-4"

                    onClick={handleShow}
                    > Update</Button>
                    <UpdateForm postInfo={postInfo}  show={show} setShow={setShow} />

                    <Button className="btn-danger"
                        onClick={(e) => handleDelete(_id, e)}
                    > Delete</Button>
                </Card.Body>
            </Card>
        </div>
        </>
    );
};

export default UserPostCard;