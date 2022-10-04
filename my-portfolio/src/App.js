import React from "react";
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import PortfolioProvider from "./context/PortfolioProvider";
import Home from './pages/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <PortfolioProvider>
        <Routes>
          <Route path="/" element={<Home/>} exact />
        </Routes>
      </PortfolioProvider>
    </BrowserRouter>
  );
}

export default App;
