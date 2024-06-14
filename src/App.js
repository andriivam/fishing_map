
import './App.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import fishingSpots from './fishingSpots.json';
import { FaMapMarkerAlt } from "react-icons/fa";

function App() {

  console.log(fishingSpots, 'fishing spots')

  const styleBrussels = { color: "orange", fontSize: "1.5em" };
  const styleWallonia = { color: "red", fontSize: "1.5em" };
  const styleFlanders = { color: "yellow", fontSize: "1.5em" };


  return (
    <div className="container">
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
      <MapContainer className="map" center={[50.83563307812127, 4.355027921482965]} zoom={8} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {fishingSpots.map(loc => (<Marker key={loc.name} position={[loc.lat, loc.long]}>
          <Popup>
            {loc.name}
            <br />
            {loc.description}
          </Popup>
        </Marker>))}
      </MapContainer>
    </div>

  );
}

export default App;
