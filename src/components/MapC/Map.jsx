import React from 'react';
import './map.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'


const Map = ({ fishingSpots }) => {


    return (
        <div>
            <MapContainer className="map" center={[50.83563307812127, 4.355027921482965]} zoom={8} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {fishingSpots.map((loc) => (<Marker key={loc.name} position={[loc.lat, loc.long]}>
                    <Popup className="leaflet-popup-content-wrapper"
                        style={{ backgroundColor: loc.color }}
                    >
                        <div style={{ backgroundColor: loc.color }}>
                            {loc.name}
                            <br />
                            {loc.description}
                        </div>
                    </Popup>
                </Marker>))}
            </MapContainer>
        </div>
    )
}

export default Map
