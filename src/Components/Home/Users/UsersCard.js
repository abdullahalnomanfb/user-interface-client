import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './UsersCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
const UsersCard = (props) => {

    const { _id, title, body, data, name } = props.user;
    // const shortBody = body.slice(0, 80);


    return (
        <div className="col-md-4 mb-5 ">
            <Card className="post-card" >
                <Card.Body className="user-card">
                    <Card.Title className="text-capitalize">


                        <h6 className="text-primary"> <FontAwesomeIcon icon={faUserCircle} style={{ fontSize: '25px', color: 'gray' }} /> {name}</h6>

                    </Card.Title>

                    <p style={{ fontSize: "13px" }} className="text-secondary ">{data}</p>
                    <Card.Title style={{height:"40px"}} className="text-capitalize"><h6>{title}</h6></Card.Title>
                    <Card.Text className="text-capitalize" >
                        {body}....
                    </Card.Text>

                    <Link to={`/post/details/${_id}`}>
                        <button className="btn-primary rounded py-2 px-3">See post details</button>
                    </Link>

                </Card.Body>
            </Card> 





        </div>
    );
};

export default UsersCard;