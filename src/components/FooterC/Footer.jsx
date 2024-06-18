import React from 'react';
import './footer.css';
import { FaFacebook } from "react-icons/fa";

const Footer = () => {

    const styleFooter = { color: "blue", fontSize: "1.5em" };

    return (
        <div className="footer">
            <a className="footer_link" target="_blank" rel="noreferrer" href="https://www.facebook.com/groups/545818806885149" >
                <FaFacebook style={styleFooter} />
            </a>
        </div>
    )
}

export default Footer
