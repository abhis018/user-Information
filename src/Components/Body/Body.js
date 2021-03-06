import React from 'react';
import Card from './Card';
import './Card.css'


const Body = ({userData, inputPage}) => {
    return (
        <div className="Get-data">
            {userData.length !== 0 
                ?   <div className='box'>{userData.map((user, i) => (
                        <Card
                            key={i}
                            id={userData[i].id}
                            FirstName={userData[i].first_name}
                            LastName={userData[i].last_name}
                            Email={userData[i].email}
                        />))}
                    </div>
                :   <div>
                        <h2>Enter valid page number and press Submit</h2>
                        <h5>Note: If data is not showing then either you have not enter a valid page number or you have not pressed the submit button</h5>
                    </div>
                // :(inputPage === '' || inputPage === '1' || inputPage === '2'
                //     ? <h2 className="data-info">PRESS SUBMIT BUTTON</h2> 
                //     : <h2 className="data-info">OOPS! SORRY THIS PAGE DOESN'T EXIST</h2>
                // )
            }
        </div>
    )
}

export default Body;