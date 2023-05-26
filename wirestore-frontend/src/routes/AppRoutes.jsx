import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ROUTES } from './routesConstants';
import HomePage from '../pages/HomePage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME()} element={<HomePage />} />
    </Routes>
  );
};

export default AppRoutes;
