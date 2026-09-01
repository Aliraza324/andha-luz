import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// Lazy load the Home component
const Home = lazy(() => import('../pages/landing/home/Home'));

const LandingRoutes = () => {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-[#1b3447] text-white">Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add more landing routes here in the future */}
      </Routes>
    </Suspense>
  );
};

export default LandingRoutes;
