
import './App.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import fishingSpots from './fishingSpots.json';

import Header from './components/HeaderC/Header';

function App() {


  return (
    <div className="container">
      <Header />
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
