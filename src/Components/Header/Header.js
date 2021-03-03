import React from 'react';


const Header = ({Submit, onInputChange}) => {
    return (
        <div>
            <input placeholder="input page number"onChange={onInputChange}/>
            <button onClick={Submit}>Enter</button>
        </div>
    )
}

export default Header;