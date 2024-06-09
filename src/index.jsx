import * as React from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  NavLink,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import './global.css';
import { KojoradcePage } from './pages/KojoradcePage';
import { InfoPage } from './pages/InfoPage';
import { PositionsPage } from './pages/PositionsPage';
import { TechniquePage } from './pages/TechniquePage';
import { LPPage } from './pages/LPPage';
import { BottomMenu } from './components/BottomMenu';

export const ErrorPage = () => {
  return (
    <div className="container container-contact">
      <h2>Jejda, neco se pokazilo</h2>
      <Link to="/">Vratit se na hlavni</Link>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <nav>
        <Link to="/">Hlavni</Link>
        <span> | </span>
        <Link to="/kojoradce">Kojorádce</Link>
        <span> | </span>
        <Link to="/info-o-kojeni">Info o kojení</Link>
        <span> | </span>
        <Link to="/laktacni-poradkyne">Laktační poradkyně</Link>
      </nav>
      <Outlet />
      <footer>
        <BottomMenu />
      </footer>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/kojoradce/:code',
        element: <KojoradcePage />,
      },
      {
        path: '/info-o-kojeni',
        element: <InfoPage />,
      },
      {
        path: '/info-o-kojeni/polohy',
        element: <PositionsPage />,
      },
      {
        path: '/info-o-kojeni/technika',
        element: <TechniquePage />,
      },

      {
        path: '/laktacni-poradkyne',
        element: <LPPage />,
      },
    ],
  },
]);

createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />,
);
