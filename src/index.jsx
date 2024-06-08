import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  NavLink,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import "./global.css";
import { ErrorPage } from "./pages/ErrorPage";


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
    <>
      <nav className="navigation">
      </nav>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/kojoradce',
    element: <KojoradcePage />,
  },
  {
    path: '/info-o-kojeni',
    element: <InfoPage />,
    children: [
      {
        path: '/polohy',
        element: <PositionsPage />,
      },
      {
        path: "/technika",
        element: <TechniquePage />,
      },
    ],
  },
  {
    path: '/laktacni-poradkyne',
    element: <LPPage />,
  },
    ]
  }

]);

createRoot(document.querySelector("#app")).render(
  <RouterProvider router={router} />
);
