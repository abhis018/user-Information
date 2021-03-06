import React from 'react';
import Card from './Card';
import './Card.css'


const Body = ({userData, inputPage}) => {
    return (
        <div className="Get-data">
            {userData.length !== 0 
                ? <div className='box'>{userData.map((user, i) => (
                    <Card
                        key={i}
                        id={userData[i].id}
                        FirstName={userData[i].first_name}
                        LastName={userData[i].last_name}
                        Email={userData[i].email}
                    />))}
                </div>
                :(inputPage === '' || inputPage === '1' || inputPage === '2'
                    ? <h2 className="data-info">PRESS SUBMIT BUTTON</h2> 
                    : <h2 className="data-info">OOPS! SORRY THIS PAGE DOESN'T EXIST</h2>
                )
            }
        </div>
    )
}

export default Body;