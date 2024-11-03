// src/App.js
import React from 'react';
import FlashcardList from './components/FlashcardList';
import './App.css';

const items = [
  { name: 'Barcelona Chair', description: 'Designed by Ludwig Mies van der Rohe and Lilly Reich in 1929.', image: '/images/barcelona-chair.jpg' },
  { name: 'Eames Lounge Chair', description: 'Designed by Charles and Ray Eames in 1956.', image: '/images/eames-lounge-chair.jpg' },
  { name: 'Arco Lamp', description: 'Designed by Achille and Pier Giacomo Castiglioni in 1962.', image: '/images/arco-lamp.jpg' },
  { name: 'Wassily Chair', description: 'Designed by Marcel Breuer in 1925.', image: '/images/wassily-chair.jpg' },
  { name: 'Tulip Chair', description: 'Designed by Eero Saarinen in 1955.', image: '/images/tulip-chair.jpg' },
  { name: 'Egg Chair', description: 'Designed by Arne Jacobsen in 1958.', image: '/images/egg-chair.jpg' },
  { name: 'LC4 Chaise Lounge', description: 'Designed by Le Corbusier, Pierre Jeanneret, and Charlotte Perriand in 1928.', image: '/images/lc4-chaise-lounge.jpg' },
  { name: 'Noguchi Table', description: 'Designed by Isamu Noguchi in 1947.', image: '/images/noguchi-table.jpg' },
  { name: 'Panton Chair', description: 'Designed by Verner Panton in 1960.', image: '/images/panton-chair.jpg' },
  { name: 'Diamond Chair', description: 'Designed by Harry Bertoia in 1952.', image: '/images/diamond-chair.jpg' },
  { name: 'Swan Chair', description: 'Designed by Arne Jacobsen in 1958.', image: '/images/swan-chair.jpg' },
  { name: 'Brno Chair', description: 'Designed by Ludwig Mies van der Rohe in 1930.', image: '/images/brno-chair.jpg' },
  // { name: 'B32/Cesca Chair', description: 'Designed by Marcel Breuer in 1928.', image: '/images/b32-cesca-chair.jpg' },
  // { name: 'Rietveld Red and Blue Chair', description: 'Designed by Gerrit Rietveld in 1918.', image: '/images/rietveld-red-blue-chair.jpg' },
  // { name: 'Saarinen Executive Chair', description: 'Designed by Eero Saarinen in 1950.', image: '/images/saarinen-executive-chair.jpg' },
  // { name: 'Cherner Chair', description: 'Designed by Norman Cherner in 1958.', image: '/images/cherner-chair.jpg' },
  // { name: 'Louis Ghost Chair', description: 'Designed by Philippe Starck in 2002.', image: '/images/louis-ghost-chair.jpg' },
  // { name: 'Platner Arm Chair', description: 'Designed by Warren Platner in 1966.', image: '/images/platner-arm-chair.jpg' },
  // { name: 'Florence Knoll Sofa', description: 'Designed by Florence Knoll in 1954.', image: '/images/florence-knoll-sofa.jpg' },
  // { name: 'Zig Zag Chair', description: 'Designed by Gerrit Rietveld in 1934.', image: '/images/zig-zag-chair.jpg' },
  // { name: 'Superleggera Chair', description: 'Designed by Gio Ponti in 1957.', image: '/images/superleggera-chair.jpg' },
  // { name: 'Corona Chair', description: 'Designed by Poul M. Volther in 1961.', image: '/images/corona-chair.jpg' },
  // { name: 'Papa Bear Chair', description: 'Designed by Hans J. Wegner in 1951.', image: '/images/papa-bear-chair.jpg' },
  // { name: 'La Chaise', description: 'Designed by Charles and Ray Eames in 1948.', image: '/images/la-chaise.jpg' },
  // { name: 'LC2 Chair', description: 'Designed by Le Corbusier, Pierre Jeanneret, and Charlotte Perriand in 1928.', image: '/images/lc2-chair.jpg' },
  // { name: 'Hill House Chair', description: 'Designed by Charles Rennie Mackintosh in 1903.', image: '/images/hill-house-chair.jpg' },
  // { name: 'Ball Chair', description: 'Designed by Eero Aarnio in 1963.', image: '/images/ball-chair.jpg' },
  // { name: 'Nelson Platform Bench', description: 'Designed by George Nelson in 1946.', image: '/images/nelson-platform-bench.jpg' },
  // { name: 'Butterfly Stool', description: 'Designed by Sori Yanagi in 1954.', image: '/images/butterfly-stool.jpg' },
  // { name: 'Armchair 400 “Tank”', description: 'Designed by Alvar Aalto in 1936.', image: '/images/armchair-400.jpg' }
];


function App() {
  return (
    <div className="App">
      <h1>Iconic Interior Design Flashcards</h1>
      <FlashcardList items={items} />
    </div>
  );
}

export default App;
