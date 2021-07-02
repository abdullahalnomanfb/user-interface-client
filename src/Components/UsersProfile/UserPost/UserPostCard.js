import React from 'react';
import { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import UpdateForm from './UpdateForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
const UserPostCard = (props) => {

    const { _id, title, body, name } = props.singlePost;

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
            <div className="col-md-4 mb-5 ">
                <Card >
                    <Card.Body className="card-hover " style={{ backgroundColor: '#ffffff', borderRadius: '10px', boxShadow: '10px 10px 29px #ddd' }}>
                        <Card.Title className="text-primary">{name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{title}</Card.Subtitle>
                        <Card.Text style={{ height: "150px" ,overflow:'auto'}}>
                            {body}
                        </Card.Text>
                        <Button className="btn-success mx-4"

                            onClick={handleShow}
                        ><FontAwesomeIcon icon={faEdit} style={{ fontSize: '15px', color: '#ffff' }} /> Edit</Button>
                        <UpdateForm postInfo={postInfo} show={show} setShow={setShow} />

                        <Button className="btn-danger"
                            onClick={(e) => handleDelete(_id, e)}
                        > <FontAwesomeIcon icon={faTrash} style={{ fontSize: '15px', color: '#ffff' }} /> Delete</Button>
                    </Card.Body>
                </Card>
            </div>
        </>
    );
};

export default UserPostCard;