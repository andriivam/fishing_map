import React from 'react';
import './buttons.css';

const Buttons = ({ filterSpots }) => {

    return (
        <div className="btnContainer">
            <button onClick={() => filterSpots('all')} className="btn btn_all">Усі локації</button>
            <button onClick={() => filterSpots('fishing spot')} className="btn btn_location">Риболовні локації</button>
            <button onClick={() => filterSpots('fishing shop')} className="btn btn_shop">Риболовні магазини</button>
            <button className="btn btn_rest">Відпочинок на природі</button>
        </div>
    )
}

export default Buttons
