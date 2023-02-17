import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Error from './pages/Error';
import Main from './pages/Main';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      errorElement: <Error />
    }
  ]);

  return <RouterProvider router={router} />;
};

export default App;
