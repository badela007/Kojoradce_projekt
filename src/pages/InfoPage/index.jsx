import React from 'react';
import './style.css';
import {
    createBrowserRouter,
    NavLink,
    RouterProvider,
    Route,
    Link,
    Outlet,
  } from 'react-router-dom';


export const InfoPage = () => {
  return (
    <div className="container">
      <h1>tady bude stranka Informace o kojeni</h1>
     <Link to="/info-o-kojeni/technika">Technika</Link>
     <div>
     <Link to="/info-o-kojeni/polohy">Polohy</Link>
     </div>

    </div>
  );
};
