import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Sardines from './Sardines';
import Chips from './Chips';
import Soda from './Soda';

function VendingMachine() {
    return (
      <div className="App">
        <h1 className="vending-maching">Vending Machine!</h1>
        <div>
            <Link to="/chips">Chips</Link>
            <Link to="/soda">Soda</Link>
            <Link to="/sardines">Sardines</Link>
        </div>
      </div>
    );
  }

  export default VendingMachine;