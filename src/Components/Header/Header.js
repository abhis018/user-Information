import React from 'react';
import './Header.css';

const Header = ({Submit, onInputChange}) => {
    return (
        <div className="header">
            <h1>TECHIE&nbsp;&nbsp;&nbsp;&nbsp;BIO-DATA</h1>
            <input placeholder="enter page number" onChange={onInputChange}/>
            <button onClick={Submit}>Submit</button>
        </div>
    )
}

export default Header;