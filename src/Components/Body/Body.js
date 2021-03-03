import React from 'react';
import Card from './Card';
import './Card.css'


const Body = ({userData}) => {
    console.log(userData, '3');
    return (
        <div className='box'>
            {userData.map((user, i) => (
                <Card
                    key={i}
                    id={userData[i].id}
                    FirstName={userData[i].first_name}
                    LastName={userData[i].last_name}
                    Email={userData[i].email}
                />
            ))}
        </div>
    )
}

export default Body;