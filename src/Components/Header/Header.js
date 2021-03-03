import React from 'react';
import './Header.css';

const Header = ({Submit, onInputChange}) => {
    return (
        <div className="header">
            <h1>TECHIE&nbsp;&nbsp;&nbsp;&nbsp;BIO-DATA</h1>
            <select className="option" onClick={Submit}>
                {/* <option>select page</option> */}
                <option value="1">Page&nbsp;1</option>
                <option value="2">Page&nbsp;2</option>
            </select>
        </div>
    )
}

export default Header;