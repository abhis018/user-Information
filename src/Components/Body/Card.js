import React from 'react';
import './Card.css';

const Card = ({id, FirstName, LastName, Email}) => {
    return (
        <div className="userbox">
            <img className="img" alt='users' src={`https://reqres.in/img/faces/${id}-image.jpg`}/>
            <div>
                <h2>{FirstName}&nbsp;{LastName}</h2>
                <p>{Email}</p>
            </div>
        </div>
    );
}

export default Card;