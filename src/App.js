
import './App.css';
import Header from './components/HeaderC/Header';
import Footer from './components/FooterC/Footer';
import Map from './components/MapC/Map';
import Buttons from './components/Buttons';
import fishingSpots from './fishingSpots.json';
import { useState } from 'react';

function App() {

  const [filteredSpots, setFilteredSpots] = useState(fishingSpots);

  const filterSpots = (type) => {
    if (type === 'all') {
      setFilteredSpots(fishingSpots);
    } else {
      setFilteredSpots(fishingSpots.filter(spot => spot.type === type));
    }
  };

  return (
    <div className="container">
      <Header />
      <Buttons filterSpots={filterSpots} />
      <Map fishingSpots={filteredSpots} />
      <Footer />
    </div>

  );
}

export default App;
