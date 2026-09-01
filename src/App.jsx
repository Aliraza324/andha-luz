import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import LandingRoutes from './routes/landingRoutes.jsx';

function App() {
  return (
    <BrowserRouter>
      <LandingRoutes />
    </BrowserRouter>
  );
}

export default App;
