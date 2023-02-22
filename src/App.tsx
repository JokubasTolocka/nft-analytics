import React, { ReactNode } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NavBar from './components/NavBar';
import Error from './pages/Error';
import Main from './pages/Main';

const withNavWrapper = (children: ReactNode) => (
  <>
    <NavBar />
    {children}
  </>
);

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: withNavWrapper(<Main />),
      errorElement: <Error />
    }
  ]);

  return (
    <div className="bg-dark-100 h-full w-full flex flex-col">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
