import './style.css';

export const HomePage = () => {
  return (
    <div className="container">
      <header>
        <div className="logo" />
        <h1>Kojorádce</h1>
      </header>
      <main>
        <nav>Tady bude nav</nav>
      </main>
      <footer>
        <p>Tady bude footer</p>
      </footer>
    </div>
  );
};

const router = createBrowserRouter([
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
  },
  {
    path: '/laktacni-poradkyne',
    element: <LPPage />,
  },
]);

createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />,
);
