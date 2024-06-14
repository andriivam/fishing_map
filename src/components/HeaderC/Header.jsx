import React from 'react'
import './header.css';
import { FaMapMarkerAlt } from "react-icons/fa";


const Header = () => {

    const styleBrussels = { color: "orange", fontSize: "1.5em" };
    const styleWallonia = { color: "red", fontSize: "1.5em" };
    const styleFlanders = { color: "yellow", fontSize: "1.5em" };

    return (
        <div className="header-container">
            <div className="header">
                <h2>Fishing Map</h2>
            </div>
            <div className="icons_wrapper">
                <div className="icons-item">
                    <h3>Brussels Area</h3>
                    <FaMapMarkerAlt style={styleBrussels} />
                </div>
                <div className="icons-item">
                    <h3>Flanders Area</h3>
                    <FaMapMarkerAlt style={styleFlanders} />
                </div>
                <div className="icons-item">
                    <h3>Wallonia Area</h3>
                    <FaMapMarkerAlt style={styleWallonia} />
                </div>
            </div>
        </div>
    )
}

export default Header
