import React from 'react';
import './App.css';

import VendingMachine from './VendingMachine';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Sardines from './Sardines';
import Chips from './Chips';
import Soda from './Soda';

function App() {
  return (
      <BrowserRouter>
          <Routes>
            <Route path="/soda" element={<Soda/>} />
            <Route path="/chips" element={<Chips/>} />
            <Route path="/sardines" element={<Sardines/>} />
            <Route path='/' element={<VendingMachine/>} />
          </Routes>
        </BrowserRouter>
  );
}

export default App;
