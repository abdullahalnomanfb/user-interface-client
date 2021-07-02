import React from 'react';
import './PostDetailsCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';


const PostDetailsCard = (props) => {

    console.log("detailsCard",props.comment);

    const {date,message,name}=props.comment;

    return (
        <div className="comment">

           <FontAwesomeIcon icon={faUserCircle} style={{ fontSize: '25px', color: 'gray' }} /><h6 className="name d-inline ml-2">{name}</h6>
            <p className="msg mt-2">{message}</p>
            <p className="date">{date}</p>
        </div>
    );
};

export default PostDetailsCard;