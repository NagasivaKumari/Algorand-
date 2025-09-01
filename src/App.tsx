import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '@shared/layouts/MainLayout';
import { routes } from './routes';
import './App.css';

const App: React.FC = () => {
  return (
    <MainLayout>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={route.element}
          />
        ))}
      </Routes>
    </MainLayout>
  );
};

export default App;
