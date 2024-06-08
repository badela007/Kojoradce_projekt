import React from 'react';
import './style.css';
import { Outlet } from 'react-router-dom';

export const InfoPage = () => {
  return (
    <div className="container">
      <h1>tady bude stranka Informace o kojeni</h1>
      <Outlet />
    </div>
  );
};
