import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SummerIsAlmostGone from './works/Summer_is_almost_gone';
import MagicMushrooms from './works/Magic_mushrooms';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SummerIsAlmostGone />} />
        <Route path="/magic-mushrooms" element={<MagicMushrooms />} />
      </Routes>
    </Router>
  );
}

export default App;
